/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const mysql = require('mysql');
const logger = require('./index').createLogger('mysql');

class MysqlTool {
  constructor(config, mysqlTableNamePrefix, rowsPerBlockInfoTable, BlockWithRWSet) {
    if (config.host) {
      logger.debug(`[mysql] connect: ${JSON.stringify(config, null, 4)}`);
      this.connection = mysql.createConnection(config);
      this.connection.connect();
      this.mysqlTableNamePrefix = mysqlTableNamePrefix;
      this.rowsPerBlockInfoTable = rowsPerBlockInfoTable;
      this.BlockWithRWSet = BlockWithRWSet;
      this.connection.on('error', (err) => {
        logger.error('connect mysql error', err.toString);
      });
    }
  }

  querySync(sql, values) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async getArchivedBlock(blockHeight, byte) {
    const sql = 'SELECT Fblock_with_rwset,Fhmac from ?? WHERE Fblock_height=?';
    const values = [`${this.mysqlTableNamePrefix}_${parseInt(blockHeight / this.rowsPerBlockInfoTable + 1, 10)}`, blockHeight];
    logger.debug(`[mysql] query: sql->"${sql}", values-> "${values}"`);
    const result = await this.querySync(sql, values);
    if (result.length) {
      if (!byte) return this.BlockWithRWSet.deserializeBinary(result[0].Fblock_with_rwset).toObject();
      return this.BlockWithRWSet.deserializeBinary(result[0].Fblock_with_rwset).serializeBinary();;
    }
    throw new Error(`no such block: ${blockHeight}`);
  }

  disconnect() {
    if (this.connection) {
      this.connection.end();
    }
  }
}

module.exports = MysqlTool;
