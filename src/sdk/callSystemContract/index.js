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
  }

  // return promise
  getTxByTxId(txId) {
    const payloadBytes = this.createQueryPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
      method: utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_TX_BY_TX_ID),
      params: {
        txId,
      },
    });
    return this.sendSystemContractPayload(payloadBytes);
  }

  // return promise
  async getBlockByHeight(blockHeight, withRWSet) {
    const payloadBytes = this.createQueryPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
      method: utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_BLOCK_BY_HEIGHT),
      params: {
        blockHeight: `${blockHeight}`,
        withRWSet,
      },
    });
    const response = await this.sendSystemContractPayload(payloadBytes, cv.NEED_SRC_RESPONSE);
    response.result = utils.common.BlockInfo.deserializeBinary(response.result).toObject();
    return response;
  }

  // return promise
  async getFullBlockByHeight(blockHeight) {
    const payloadBytes = this.createQueryPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
      method: utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_FULL_BLOCK_BY_HEIGHT),
      params: {
        blockHeight: `${blockHeight}`,
      },
    });
    const response = await this.sendSystemContractPayload(payloadBytes, cv.NEED_SRC_RESPONSE);
    response.result = utils.common.BlockInfo.deserializeBinary(response.result).toObject();
    return response;
  }

  // return promise
  async getBlockByHash(blockHash, withRWSet) {
    const convertBlockHash = Buffer.from(blockHash, 'base64').toString('hex');
    const payloadBytes = this.createQueryPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
      method: utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_BLOCK_BY_HASH),
      params: {
        blockHash: convertBlockHash,
        withRWSet,
      },
    });
    const response = await this.sendSystemContractPayload(payloadBytes, cv.NEED_SRC_RESPONSE);
    response.result = utils.common.BlockInfo.deserializeBinary(response.result).toObject();
    return response;
  }

  async getLastBlock(withRWSet) {
    const payloadBytes = this.createQueryPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
      method: utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_LAST_BLOCK),
      params: {
        withRWSet,
      },
    });
    const response = await this.sendSystemContractPayload(payloadBytes, cv.NEED_SRC_RESPONSE);
    response.result = utils.common.BlockInfo.deserializeBinary(response.result).toObject();
    return response;
  }

  async getBlockHeaderByHeight(blockHeight) {
    const payloadBytes = this.createQueryPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
      method: utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_BLOCK_HEADER_BY_HEIGHT),
      params: {
        blockHeight: `${blockHeight}`,
      },
    });
    const response = await this.sendSystemContractPayload(payloadBytes, cv.NEED_SRC_RESPONSE);
    response.result = utils.common.BlockHeader.deserializeBinary(response.result).toObject();
    return response;
  }

  async getCurrentBlockHeight() {
    const block = await this.getLastBlock(false);
    return block.result.block.header.blockHeight;
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
    let params;
    if (txId) {
      method = utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_BLOCK_HEIGHT_BY_TX_ID);
      params = {
        txId,
      };
    } else if (blockHash) {
      method = utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_BLOCK_HEIGHT_BY_HASH);
      params = {
        blockHash,
      };
    } else {
      method = utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_ARCHIVED_BLOCK_HEIGHT);
      params = {};
    }
    const payloadBytes = this.createQueryPayload({
      method,
      params,
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
    });
    const response = await this.sendSystemContractPayload(payloadBytes);
    return response;
  }

  // return promise
  async getBlockByTxId(txId, withRWSet) {
    const payloadBytes = this.createQueryPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
      method: utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_BLOCK_BY_TX_ID),
      params: {
        txId,
        withRWSet,
      },
    });
    const response = await this.sendSystemContractPayload(payloadBytes, cv.NEED_SRC_RESPONSE);
    response.result = utils.common.BlockInfo.deserializeBinary(response.result).toObject();
    return response;
  }

  // return promise
  async getLastConfigBlock(withRWSet) {
    const payloadBytes = this.createQueryPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
      method: utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_LAST_CONFIG_BLOCK),
      params: {
        withRWSet,
      },
    });
    const response = await this.sendSystemContractPayload(payloadBytes, cv.NEED_SRC_RESPONSE);
    response.result = utils.common.BlockInfo.deserializeBinary(response.result).toObject();
    return response;
  }

  // return promise
  async getNodeChainList(nodeAddr) {
    if (this.node.client[nodeAddr]) {
      const payloadBytes = this.createQueryPayload({
        contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
        method: utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_NODE_CHAIN_LIST),
        params: {},
      });
      const response = await this.sendSystemContractPayload(payloadBytes, cv.NEED_SRC_RESPONSE, nodeAddr);
      response.result = utils.discovery.ChainList.deserializeBinary(response.result).toObject();
      return response;
    }
    throw new Error(`no such node: ${nodeAddr}`);
  }

  // return promise
  async getChainInfo() {
    const payloadBytes = this.createQueryPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_QUERY),
      method: utils.enum2str(utils.common.QueryFunction, utils.common.QueryFunction.GET_CHAIN_INFO),
      params: {},
    });
    const response = await this.sendSystemContractPayload(payloadBytes, cv.NEED_SRC_RESPONSE);
    response.result = utils.discovery.ChainInfo.deserializeBinary(response.result).toObject();
    return response;
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
  async sendSystemContractPayload(payloadBytes, srcRes = false, nodeAddr) {
    return this.node.sendPayload(
      this.userInfo,
      this.chainID,
      payloadBytes,
      utils.common.TxType.QUERY_SYSTEM_CONTRACT,
      srcRes,
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
        if (tx && tx.result) {
          clearInterval(interval);
          resolve(tx.result.contractResult);
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
