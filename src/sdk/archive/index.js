/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils = require('../../utils');
const MysqlTool = require('../../utils/mysql');

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
  }

  createArchiveBlockPayload(targetBlockHeight) {
    const payload = new utils.common.ArchiveBlockPayload();
    payload.setBlockHeight(targetBlockHeight);
    return payload.serializeBinary();
  }

  createRestoreBlockPayload(fullBlock) {
    const payload = new utils.common.RestoreBlockPayload();
    payload.setFullBlock(fullBlock);
    return payload.serializeBinary();
  }

  signArchivePayload(payloadBytes) {
    return payloadBytes;
  }

  sendArchiveBlockRequest(mergeSignedPayloadBytes) {
    return this.sendPayload(mergeSignedPayloadBytes, utils.common.TxType.ARCHIVE_FULL_BLOCK);
  }

  archiveBlock(targetBlockHeight) {
    const payload = this.createArchiveBlockPayload(targetBlockHeight);
    const signPayload = this.signArchivePayload(payload);
    return this.sendArchiveBlockRequest(signPayload);
  }

  sendRestoreBlockRequest(mergeSignedPayloadBytes) {
    return this.sendPayload(mergeSignedPayloadBytes, utils.common.TxType.RESTORE_FULL_BLOCK);
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
  async sendPayload(payloadBytes, txType, srcRes = false) {
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
    const result = await this.node.sendRequest(request, srcRes);
    return { txId, result };
  }
}

module.exports = Archive;
