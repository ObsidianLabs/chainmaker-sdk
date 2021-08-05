/*
 Copyright (C) BABEC. All rights reserved.
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const { api } = require('../utils');
const grpc = require('@grpc/grpc-js');
const utils = require('../utils');
const logger = utils.createLogger('node');

class Node {
  constructor(nodeConfigArray, requestTimeout) {
    logger.debug(`Create node pool: ${JSON.stringify(nodeConfigArray, null, 4)}`);
    if (!requestTimeout) this.requestTimeout = 30000;
    else this.requestTimeout = requestTimeout;
    this.client = {};
    nodeConfigArray.forEach((config) => {
      const { nodeAddr, tlsEnable, options } = config;
      if (typeof nodeAddr !== 'string') throw new Error('[nodeAddr] must be a string');

      const grpcOption = {
        'grpc.max_send_message_length': -1,
        'grpc.max_receive_message_length': -1,
        'grpc.max_reconnect_backoff_ms': 1024,
      };
      let creds;
      if (tlsEnable) {
        const { pem, clientKey, clientCert, ['hostName']: sslTargetNameOverride } = options;

        if (!pem) throw new Error(`[tlsEnable] is ${tlsEnable}, [pem] is required`);
        if (!Buffer.isBuffer(pem)) throw new Error('[options.pem] must be a buffer');

        if (sslTargetNameOverride && typeof sslTargetNameOverride === 'string') {
          grpcOption['grpc.ssl_target_name_override'] = sslTargetNameOverride;
          grpcOption['grpc.default_authority'] = sslTargetNameOverride;
        }
        const pembuf = Buffer.concat([Buffer.from(pem), Buffer.from('\0')]);
        if (clientKey && clientCert) {
          if (!Buffer.isBuffer(clientKey)) throw new Error('[options.clientKey] must be a buffer');
          if (!Buffer.isBuffer(clientCert)) throw new Error('[options.clientCert] must be a buffer');
          creds = grpc.credentials.createSsl(pembuf, clientKey, clientCert);
        } else {
          creds = grpc.credentials.createSsl(pembuf);
        }
      } else {
        creds = grpc.credentials.createInsecure();
      }
      this.client[nodeAddr] = new api.RpcNodeClient(
        nodeAddr,
        creds,
        grpcOption,
      );
    });
    this.clientArray = Object.values(this.client);
    this.addrArray = Object.keys(this.client);
    this.clientNum = this.addrArray.length;
    this.clientIndex = 0;
  }

  // 暂时先轮着用
  getClient(nodeAddr) {
    if (nodeAddr) return this.client[nodeAddr];
    const client = this.clientArray[this.clientIndex];
    if (this.clientIndex + 1 >= this.clientNum) this.clientIndex = 0;
    else this.clientIndex += 1;
    return client;
  }

  sendRequest(request, srcRes = false, nodeAddr) {
    logger.debug(`sendRequest: ${request}`);
    return new Promise((resolve, reject) => {
      const sendTimeout = setTimeout(() => {
        clearTimeout(sendTimeout);
        return reject(new Error('REQUEST_TIMEOUT'));
      }, this.requestTimeout);
      this.getClient(nodeAddr).sendRequest(request, (err, response) => {
        clearTimeout(sendTimeout);
        if (err) {
          const errorInfo = `call sendRequest error: ${err}`;
          // console.error(errorInfo);
          reject(errorInfo);
        } else {
          const res = response.toObject();
          // console.log('get sendRequest response:', res);

          if (response.getCode() !== 0) {
            // console.log('response failed:', response.getMessage());
            reject(response);
          }
          if (srcRes) {
            if (response.getContractResult() && response.getContractResult().getResult()) {
              resolve(response.getContractResult().getResult());
            } else {
              resolve(res);
            }
          } else {
            resolve(res);
          }
        }
      });
    });
  }

  async sendPayload(userInfo, payload, srcRes = false, nodeAddr) {
    const request = utils.newRequest(
      userInfo.orgID,
      userInfo.userSignCertBytes,
      userInfo.isFullCert,
      payload,
      userInfo.userSignKeyBytes,
    );
    // console.log(JSON.stringify(request.toObject(), null, 4));
    const result = await this.sendRequest(request, srcRes, nodeAddr);
    return { txId: payload.getTxId(), result };
  }

  subscribe(request) {
    logger.debug(`subscribe: ${request}`);
    const response = this.getClient().subscribe(request);
    return response;
  }

  close() {
    this.clientArray.forEach((client) => {
      client.close();
    });
  }
}

module.exports = Node;
