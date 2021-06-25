/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('../sdkInit');
const { sdk } = sdkInit();

const testArchiveBlock = async (sdk, heigth) => {
  const response = await sdk.archive.archiveBlock(heigth);
  return response;
};

const testGetArchivedFullBlockByHeight = async (sdk, heigth) => {
  const response = await sdk.archive.getArchivedFullBlockByHeight(heigth);
  return response;
};

const testGetArchivedBlockByHeight = async (sdk, height, withRWSet) => {
  const response = await sdk.archive.getArchivedBlockByHeight(height, withRWSet);
  return response;
};

const testGetArchivedBlockByTxId = async (sdk, txId, withRWSet) => {
  const response = await sdk.archive.getArchivedBlockByTxId(txId, withRWSet);
  return response;
};

const testGetArchivedBlockByHash =  async (sdk, hash, withRWSet) => {
  const response = await sdk.archive.getArchivedBlockByHash(hash, withRWSet);
  return response;
};

const testGetArchivedTxByTxId = async (sdk, txId) => {
  const response = await sdk.archive.getArchivedTxByTxId(txId);
  return response;
};

const test = async (type) => {
  let res;
  try {
    switch (type) {
      case 'archiveBlock':
        res = await testArchiveBlock(sdk, 2);
        break;
      case 'getArchivedFullBlockByHeight':
        res = await testGetArchivedFullBlockByHeight(sdk, 0);
        break;
      case 'getArchivedBlockByHeight':
        res = await testGetArchivedBlockByHeight(sdk, 0, false);
        break;
      case 'getArchivedBlockByTxId':
        res = await testGetArchivedBlockByTxId(sdk, 'ce6c57b969e84054b7c87bfe5113f615ce6c57b969e84054b7c87bfe5113f615', false);
        break;
      case 'getArchivedBlockByHash':
        res = await testGetArchivedBlockByHash(sdk, 'sqUq4gjRbFL2jHO9CYi1Hw2RizJvMmi3d//HFZqsLz8=', false);
        break;
      case 'getArchivedTxByTxId':
        res = await testGetArchivedTxByTxId(sdk, 'ce6c57b969e84054b7c87bfe5113f615ce6c57b969e84054b7c87bfe5113f615', false);
        break;
    }
    sdk.stop();
    console.log(type, ':', JSON.stringify(res, null, 4));
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('getArchivedBlockByHeight');
