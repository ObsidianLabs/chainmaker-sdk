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
    this.commonObj = {
      chainId: this.chainID,
    };
  }

  // return promise
  invokeUserContract({ contractName, method, params, withSyncResult = false }) {
    const payload = utils.buildPayload({
      contractName,
      method,
      ...this.commonObj,
      txType: utils.common.TxType.INVOKE_CONTRACT,
      parameters: params,
    });
    return this.sendContractRequest(payload, [], withSyncResult);
  }

  // return promise
  queryContract({ contractName, method, params }) {
    const payload = utils.buildPayload({
      contractName,
      method,
      ...this.commonObj,
      txType: utils.common.TxType.QUERY_CONTRACT,
      parameters: params,
    });
    return this.sendContractRequest(payload);
  }

  // return promise
  async sendContractRequest(payload, endorsers = [], withSyncResult = false) {
    const result =  await this.node.sendPayload(
      this.userInfo,
      payload,
      false,
      endorsers,
    );
    if (withSyncResult) {
      const res = await this.callSystemContract.getSyncResult(result.txId);
      result.contractResult = res;
      return result;
    }
    return result;
  }

  getTxRequest(contractName, method, params, endorsers = []) {
    const payload = utils.buildPayload({
      contractName,
      method,
      ...this.commonObj,
      txType: utils.common.TxType.INVOKE_CONTRACT,
      parameters: params,
    });
    const request = utils.newRequest(
      this.userInfo.orgID,
      this.userInfo.userSignCertBytes,
      this.userInfo.isFullCert,
      payload,
      this.userInfo.userSignKeyBytes,
      endorsers,
    );
    return { request, txId: payload.getTxId() };
  }

  async sendTxRequest(request, txId, withSyncResult = false) {
    const result = await this.node.sendRequest(request);
    if (withSyncResult) {
      const res = await this.callSystemContract.getSyncResult(txId);
      result.contractResult = res;
      return result;
    }
    return result;
  }
}

module.exports = CallUserContract;
