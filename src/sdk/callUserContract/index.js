/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils = require('../../utils');

class CallUserContract {
  constructor(chainID, userInfo, node, callSystemContract) {
    this.chainID = chainID;
    this.userInfo = userInfo;
    this.node = node;
    this.callSystemContract = callSystemContract;
  }

  // return promise
  invokeUserContract({ contractName, method, params, withSyncResult = false }) {
    const payloadBytes = this.createTransactPayload({ contractName, method, params });
    return this.sendUserContractPayload(payloadBytes, utils.common.TxType.INVOKE_USER_CONTRACT, withSyncResult);
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
  async sendUserContractPayload(payloadBytes, txType, withSyncResult = false) {
    const result = await this.node.sendPayload(
      this.userInfo,
      this.chainID,
      payloadBytes,
      txType,
      false,
    );
    if (withSyncResult) {
      const res = await this.callSystemContract.getSyncResult(result.txId);
      result.result.contractResult = res;
      return result;
    }
    return result;
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

  async sendTxRequest(request, txId, withSyncResult = false) {
    const result = await this.node.sendRequest(request);
    if (withSyncResult) {
      const res = await this.callSystemContract.getSyncResult(txId);
      result.contractResult = res;
      return { txId, result };
    }
    return { txId, result };
  }
}

module.exports = CallUserContract;
