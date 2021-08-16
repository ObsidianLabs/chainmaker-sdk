/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils = require('../../utils');
const cv = require('../../utils/constValue');

class CallSystemContract {
  constructor(chainID, userInfo, node) {
    this.node = node;
    this.userInfo = userInfo;
    this.chainID = chainID;
    this.commonObj = {
      chainId: this.chainID,
      txType: utils.common.TxType.QUERY_CONTRACT,
      contractName: utils.enum2str(utils.sysContract.SystemContract, utils.sysContract.SystemContract.CHAIN_QUERY),
      sequence: cv.DEFAULT_SEQUENCE,
    };
  }

  // return promise
  async getTxByTxId(txId) {
    const parameters = {};
    parameters[cv.keys.KeyBlockContractTxId] = txId;
    const payload = utils.buildPayload({
      parameters,
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_TX_BY_TX_ID,
      ),
    });
    let response = await this.sendSystemContractPayload(payload, true);
    response = utils.common.TransactionInfo.deserializeBinary(response).toObject();
    return response;
  }

  // return promise
  async getBlockByHeight(blockHeight, withRWSet) {
    const parameters = {};
    parameters[cv.keys.KeyBlockContractBlockHeight] = blockHeight;
    parameters[cv.keys.KeyBlockContractWithRWSet] = withRWSet;
    const payload = utils.buildPayload({
      parameters,
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_BLOCK_BY_HEIGHT,
      ),
    });
    let response = await this.sendSystemContractPayload(payload, cv.NEED_SRC_RESPONSE);
    response = utils.common.BlockInfo.deserializeBinary(response).toObject();
    return response;
  }

  // return promise
  async getFullBlockByHeight(blockHeight) {
    const parameters = {};
    parameters[cv.keys.KeyBlockContractBlockHeight] = blockHeight;
    const payload = utils.buildPayload({
      parameters,
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_FULL_BLOCK_BY_HEIGHT,
      ),
    });
    let response = await this.sendSystemContractPayload(payload, cv.NEED_SRC_RESPONSE);
    response = utils.common.BlockInfo.deserializeBinary(response).toObject();
    return response;
  }

  // return promise
  async getBlockByHash(blockHash, withRWSet) {
    const parameters = {};
    parameters[cv.keys.KeyBlockContractBlockHash] = Buffer.from(blockHash, 'base64').toString('hex');
    parameters[cv.keys.KeyBlockContractWithRWSet] = withRWSet;
    const payload = utils.buildPayload({
      parameters,
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_BLOCK_BY_HASH,
      ),
    });
    let response = await this.sendSystemContractPayload(payload, cv.NEED_SRC_RESPONSE);
    response = utils.common.BlockInfo.deserializeBinary(response).toObject();
    return response;
  }

  async getLastBlock(withRWSet) {
    const parameters = {};
    parameters[cv.keys.KeyBlockContractWithRWSet] = withRWSet;
    const payload = utils.buildPayload({
      parameters,
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_LAST_BLOCK,
      ),
    });
    let response = await this.sendSystemContractPayload(payload, cv.NEED_SRC_RESPONSE);
    response = utils.common.BlockInfo.deserializeBinary(response).toObject();
    return response;
  }

  async getBlockHeaderByHeight(blockHeight) {
    const parameters = {};
    parameters[cv.keys.KeyBlockContractBlockHeight] = blockHeight;
    const payload = utils.buildPayload({
      parameters,
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_BLOCK_HEADER_BY_HEIGHT,
      ),
    });
    let response = await this.sendSystemContractPayload(payload, cv.NEED_SRC_RESPONSE);
    response = utils.common.BlockHeader.deserializeBinary(response).toObject();
    return response;
  }

  async getCurrentBlockHeight() {
    const block = await this.getLastBlock(false);
    return block.block.header.blockHeight;
  }

  getArchivedBlockHeight() {
    return this.getBlockHeight({});
  }

  getBlockHeightByTxId(txId) {
    return this.getBlockHeight({ txId });
  }

  getBlockHeightByHash(blockHash) {
    const convertBlockHash = Buffer.from(blockHash, 'base64').toString('hex');
    return this.getBlockHeight({ blockHash: convertBlockHash });
  }

  async getBlockHeight({ txId, blockHash }) {
    let method;
    const parameters = {};
    if (txId) {
      method = utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_BLOCK_HEIGHT_BY_TX_ID,
      );
      parameters[cv.keys.KeyBlockContractTxId] = txId;
    } else if (blockHash) {
      method = utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_BLOCK_HEIGHT_BY_HASH,
      );
      parameters[cv.keys.KeyBlockContractBlockHash] = blockHash;
    } else {
      method = utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_ARCHIVED_BLOCK_HEIGHT,
      );
    }
    const payload = utils.buildPayload({
      parameters,
      method,
      ...this.commonObj,
    });
    const response = await this.sendSystemContractPayload(payload);
    return response;
  }

  // return promise
  async getBlockByTxId(txId, withRWSet) {
    const parameters = {};
    parameters[cv.keys.KeyBlockContractTxId] = txId;
    parameters[cv.keys.KeyBlockContractWithRWSet] = withRWSet;
    const payload = utils.buildPayload({
      parameters,
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_BLOCK_BY_TX_ID,
      ),
    });
    let response = await this.sendSystemContractPayload(payload, cv.NEED_SRC_RESPONSE);
    response = utils.common.BlockInfo.deserializeBinary(response).toObject();
    return response;
  }

  // return promise
  async getLastConfigBlock(withRWSet) {
    const parameters = {};
    parameters[cv.keys.KeyBlockContractWithRWSet] = withRWSet;
    const payload = utils.buildPayload({
      parameters,
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_LAST_CONFIG_BLOCK,
      ),
    });
    let response = await this.sendSystemContractPayload(payload, cv.NEED_SRC_RESPONSE);
    response = utils.common.BlockInfo.deserializeBinary(response).toObject();
    return response;
  }

  // return promise
  async getNodeChainList(nodeAddr) {
    if (this.node.client[nodeAddr]) {
      const payload = utils.buildPayload({
        parameters: {},
        ...this.commonObj,
        method: utils.enum2str(
          utils.sysContract.ChainQueryFunction,
          utils.sysContract.ChainQueryFunction.GET_NODE_CHAIN_LIST,
        ),
      });
      let response = await this.sendSystemContractPayload(payload, cv.NEED_SRC_RESPONSE, nodeAddr);
      response = utils.discovery.ChainList.deserializeBinary(response).toObject();
      return response;
    }
    throw new Error(`no such node: ${nodeAddr}`);
  }

  // return promise
  async getChainInfo() {
    const payload = utils.buildPayload({
      parameters: {},
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ChainQueryFunction,
        utils.sysContract.ChainQueryFunction.GET_CHAIN_INFO,
      ),
    });
    let response = await this.sendSystemContractPayload(payload, cv.NEED_SRC_RESPONSE);
    response = utils.discovery.ChainInfo.deserializeBinary(response).toObject();
    return response;
  }

  // return promise
  async sendSystemContractPayload(payload, srcRes = false, nodeAddr) {
    return this.node.sendPayload(
      this.userInfo,
      payload,
      srcRes,
      [],
      nodeAddr,
    );
  }

  getSyncResult(txId) {
    return new Promise(async (resolve) => {
      const { requestTimeout } = this.node;
      let count = requestTimeout / 100;
      const interval = setInterval(async () => {
        let tx;
        try {
          tx = await this.getTxByTxId(txId);
        } catch {}
        if (tx
          && tx.transaction
          && tx.transaction.result
          && tx.transaction.result.contractResult) {
          clearInterval(interval);
          resolve(tx.transaction.result.contractResult);
        }
        if (count === 0) {
          clearInterval(interval);
          resolve('error');
        }
        count -= 1;
      }, 100);
    });
  }
}

module.exports = CallSystemContract;
