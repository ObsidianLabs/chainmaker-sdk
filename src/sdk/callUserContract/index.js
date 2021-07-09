/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils = require('../../utils');

class CallUserContract {
  constructor(chainID, userInfo, node) {
    this.chainID = chainID;
    this.userInfo = userInfo;
    this.node = node;
  }

  // return promise
  invokeUserContract({ contractName, method, params }) {
    const payloadBytes = this.createTransactPayload({ contractName, method, params });
    return this.sendUserContractPayload(payloadBytes, utils.common.TxType.INVOKE_USER_CONTRACT);
  }

  // return promise
  queryContract({ contractName, method, params }) {
    const payloadBytes = this.createQueryPayload({ contractName, method, params });
    return this.sendUserContractPayload(payloadBytes, utils.common.TxType.QUERY_USER_CONTRACT);
  }

  createTransactPayload({ contractName, method, params }) {
    const payload = new utils.common.TransactPayload();
    payload.setContractName(contractName);
    payload.setMethod(method);
    Object.keys(params).forEach((key) => {
      const param = new utils.common.KeyValuePair();
      param.setKey(key);
      param.setValue(params[key]);
      payload.addParameters(param);
    });

    const payloadBytes = payload.serializeBinary();
    return payloadBytes;
  }

  createQueryPayload({ contractName, method, params }) {
    const payload = new utils.common.QueryPayload();
    payload.setContractName(contractName);
    payload.setMethod(method);
    Object.keys(params).forEach((key) => {
      const param = new utils.common.KeyValuePair();
      param.setKey(key);
      param.setValue(params[key]);
      payload.addParameters(param);
    });
    // console.log(JSON.stringify(payload.toObject(), 4, null));
    const payloadBytes = payload.serializeBinary();
    return payloadBytes;
  }

  // return promise
  async sendUserContractPayload(payloadBytes, txType) {
    return this.node.sendPayload(
      this.userInfo,
      this.chainID,
      payloadBytes,
      txType,
      false,
    );
  }

  getTxRequest(contractName, method, params) {
    const payloadBytes = this.createTransactPayload({ contractName, method, params });
    const txId = utils.newTxID();
    const request = utils.newRequest(
      txId,
      this.chainID,
      utils.common.TxType.INVOKE_USER_CONTRACT,
      this.userInfo.orgID,
      this.userInfo.userSignCertBytes,
      this.userInfo.isFullCert,
      payloadBytes,
      this.userInfo.userSignKeyBytes,
    );
    return { request, txId };
  }

  async sendTxRequest(request, txId) {
    const result = await this.node.sendRequest(request);
    return { txId, result };
  }
}

module.exports = CallUserContract;
