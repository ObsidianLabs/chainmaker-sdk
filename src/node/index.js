/*
 Copyright (C) BABEC. All rights reserved.
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const { api } = require('../utils');
const grpc = require('@grpc/grpc-js');
const logger = require('../utils').createLogger('node');

class Node {
  constructor(nodeConfigArray, requestTimeout) {
    logger.debug(`Create node pool: ${JSON.stringify(nodeConfigArray, null, 4)}`);
    if (!requestTimeout) this.requestTimeout = 30000;
    else this.requestTimeout = requestTimeout;
    this.client = {};
    nodeConfigArray.forEach((config) => {
      const { nodeAddr, tlsEnable, options } = config;
      const grpcOption = {
        'grpc.max_send_message_length': -1,
        'grpc.max_receive_message_length': -1,
      };
      let creds;
      if (tlsEnable) {
        const { pem, clientKey, clientCert, ['ssl-target-name-override']: sslTargetNameOverride } = options;
        if (sslTargetNameOverride && typeof sslTargetNameOverride === 'string') {
          grpcOption['grpc.ssl_target_name_override'] = sslTargetNameOverride;
          grpcOption['grpc.default_authority'] = sslTargetNameOverride;
        }
        const pembuf = Buffer.concat([Buffer.from(pem), Buffer.from('\0')]);
        if (clientKey && clientCert) {
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
          console.error(errorInfo);
          reject(errorInfo);
        } else {
          const res = response.toObject();
          // console.log('get sendRequest response:', res);

          if (response.getCode() !== 0) {
            console.log('response failed:', response.getMessage());
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
