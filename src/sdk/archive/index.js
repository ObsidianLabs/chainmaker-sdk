/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils = require('../../utils');
const MysqlTool = require('../../utils/mysql');
const cv = require('../../utils/constValue');

const mysqlDBNamePrefix = 'cm_archived_chain';
const	mysqlTableNamePrefix = 't_block_info';
const	rowsPerBlockInfoTable = 100000;

class Archive extends MysqlTool {
  constructor(chainID, userInfo, node, callSystemContract, { type = 'mysql', dbHost, dbPort, dbUsername, dbPassword }) {
    const mysqlConfig = {
      host: dbHost,
      port: dbPort,
      user: dbUsername,
      password: dbPassword,
      database: `${mysqlDBNamePrefix}_${chainID}`,
    };
    super(mysqlConfig, mysqlTableNamePrefix, rowsPerBlockInfoTable, utils.store.BlockWithRWSet);
    this.config = {
      mysql: mysqlConfig,
    };
    this.node = node;
    this.userInfo = userInfo;
    this.chainID = chainID;
    this.config = {};
    this.config.type = type;
    this.callSystemContract = callSystemContract;
    this.commonObj = {
      chainId: this.chainID,
      txType: utils.common.TxType.ARCHIVE,
      contractName: utils.enum2str(utils.sysContract.SystemContract, utils.sysContract.SystemContract.ARCHIVE_MANAGE),
    };
  }

  createArchiveBlockPayload(targetBlockHeight) {
    const parameters = {};
    parameters[cv.keys.KeyArchiveBlockHeight] = utils.uint64ToBuffer(targetBlockHeight);

    return utils.buildPayload({
      parameters,
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ArchiveFunction,
        utils.sysContract.ArchiveFunction.ARCHIVE_BLOCK,
      ),
    });
  }

  createRestoreBlockPayload(fullBlock) {
    const parameters = {};
    parameters[cv.keys.KeyArchiveFullBlock] = fullBlock;

    return utils.buildPayload({
      parameters,
      ...this.commonObj,
      method: utils.enum2str(
        utils.sysContract.ArchiveFunction,
        utils.sysContract.ArchiveFunction.RESTORE_BLOCK,
      ),
    });
  }

  signArchivePayload(payload) {
    return payload;
  }

  sendArchiveBlockRequest(signPayload) {
    return this.sendPayload(signPayload);
  }

  archiveBlock(targetBlockHeight) {
    const payload = this.createArchiveBlockPayload(targetBlockHeight);
    const signPayload = this.signArchivePayload(payload);
    return this.sendArchiveBlockRequest(signPayload);
  }

  sendRestoreBlockRequest(signPayload) {
    return this.sendPayload(signPayload);
  }

  restoreBlock(fullBlock) {
    const payload = this.createRestoreBlockPayload(fullBlock);
    const signPayload = this.signArchivePayload(payload);
    return this.sendRestoreBlockRequest(signPayload);
  }

  getFullBlock(blockHeight) {
    return this.getArchivedBlock(blockHeight, true);
  }

  getArchivedFullBlockByHeight(blockHeight) {
    return this.getArchivedBlock(blockHeight);
  }

  async getArchivedBlockByHeight(blockHeight, withRWSet) {
    const fullBlock = await this.getArchivedBlock(blockHeight);
    const blockInfo  = {
      Block: fullBlock.block,
    };
    if (withRWSet) {
      blockInfo.RwsetList = fullBlock.TxRWSets;
    }
    return blockInfo;
  }

  async getArchivedBlockByTxId(txId, withRWSet) {
    const blockHeight = await this.callSystemContract.getBlockHeightByTxId(txId);
    return this.getArchivedBlockByHeight(parseInt(Buffer.from(blockHeight.result.contractResult.result, 'base64').toString(), 10), withRWSet);
  }

  async getArchivedBlockByHash(hash, withRWSet) {
    const blockHeight = await this.callSystemContract.getBlockHeightByHash(hash);
    return this.getArchivedBlockByHeight(parseInt(Buffer.from(blockHeight.result.contractResult.result, 'base64').toString(), 10), withRWSet);
  }

  async getArchivedTxByTxId(txId) {
    const blockHeight = await this.callSystemContract.getBlockHeightByTxId(txId);
    const blockInfo = await this.getArchivedBlockByHeight(parseInt(Buffer.from(blockHeight.result.contractResult.result, 'base64').toString(), 10), false);
    for (let i = 0; i < blockInfo.Block.txsList.length; i++) {
      if (txId === blockInfo.Block.txsList[i].header.txId) {
        return {
          Transaction: blockInfo.Block.txsList[i],
          BlockHeight: blockInfo.Block.header.blockHeight,
          BlockHash: blockInfo.Block.header.blockHash,
          TxIndex: i,
        };
      }
    }
    throw new Error(`CANNOT BE HERE! unknown tx [${txId}] in archive block [${blockHeight}]`);
  }

  // return promise
  async sendPayload(payload, srcRes = false) {
    return this.node.sendPayload(this.userInfo, payload, srcRes);
  }
}

module.exports = Archive;
