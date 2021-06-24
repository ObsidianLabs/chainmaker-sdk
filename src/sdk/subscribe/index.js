/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils = require('../../utils');

class Subscribe {
  constructor(chainID, userInfo, node) {
    this.node = node;
    this.userInfo = userInfo;
    this.chainID = chainID;
  }

  subscribeBlock(startBlock, endBlock, withRwSet, callBack) {
    const payloadBytes = this.constructSubscribeBlockPayload(startBlock, endBlock, withRwSet);
    const response = this.subscribe(payloadBytes, utils.common.TxType.SUBSCRIBE_BLOCK_INFO, callBack);
    return response;
  }

  subscribeContractEvent(topic, contractName, callBack) {
    const payloadBytes = this.constructSubscribeContractEventPayload(topic, contractName);
    const response = this.subscribe(payloadBytes, utils.common.TxType.CONTRACT_EVENT_INFO, callBack);
    return response;
  }

  subscribeTx(startBlock, endBlock, txType, txIds, callBack) {
    const payloadBytes = this.constructSubscribeTxPayload(startBlock, endBlock, txType, txIds);
    const response = this.subscribe(payloadBytes, utils.common.TxType.SUBSCRIBE_TX_INFO, callBack);
    return response;
  }

  subscribe(payloadBytes, txType, callBack) {
    const response = this.sendSubscribe(payloadBytes, txType);
    response.on('data', (block) => {
      switch (txType) {
        case utils.common.TxType.SUBSCRIBE_BLOCK_INFO:
          callBack(utils.common.BlockInfo.deserializeBinary(block.toObject().data).toObject(), null);
          break;
        case utils.common.TxType.CONTRACT_EVENT_INFO:
          callBack(utils.common.ContractEventInfoList.deserializeBinary(block.toObject().data).toObject(), null);
          break;
        case utils.common.TxType.SUBSCRIBE_TX_INFO:
          callBack(utils.common.Transaction.deserializeBinary(block.toObject().data).toObject(), null);
          break;
        default:
          throw new Error(`[txType] ${txType} unsupported`);
      }
    });
    response.on('error', (error) => {
      callBack(null, error);
    });
    response.on('end', () => {
      console.log('connection end');
    });
    return response;
  }

  constructSubscribeBlockPayload(startBlock, endBlock, withRwSet) {
    const payload = new utils.common.SubscribeBlockPayload();
    payload.setStartBlock(startBlock);
    payload.setEndBlock(endBlock);
    payload.setWithRwSet(withRwSet);
    return payload.serializeBinary();
  }

  constructSubscribeContractEventPayload(topic, contractName) {
    const payload = new utils.common.SubscribeContractEventPayload();
    payload.setTopic(topic);
    payload.setContractname(contractName);
    return payload.serializeBinary();
  }

  constructSubscribeTxPayload(startBlock, endBlock, txType, txIds) {
    const payload = new utils.common.SubscribeTxPayload();
    payload.setStartBlock(startBlock);
    payload.setEndBlock(endBlock);
    payload.setTxType(txType);
    payload.setTxIdsList(txIds);
    return payload.serializeBinary();
  }

  sendSubscribe(payloadBytes, txType, srcRes = false) {
    const txId = utils.newTxID();
    const request = utils.newRequest(
      txId,
      this.chainID,
      txType,
      this.userInfo.orgID,
      this.userInfo.userSignCertBytes,
      this.userInfo.isFullCert,
      payloadBytes,
      this.userInfo.userSignKeyBytes,
    );
    // console.log(JSON.stringify(request.toObject(), null, 4));
    return this.node.subscribe(request, srcRes);
  }
}

module.exports = Subscribe;
