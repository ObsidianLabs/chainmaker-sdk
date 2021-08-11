/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');
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
  let block;
  try {
    switch (type) {
      case 'archiveBlock':
        res = await testArchiveBlock(sdk, 3);
        break;
      case 'getArchivedFullBlockByHeight':
        res = await testGetArchivedFullBlockByHeight(sdk, 1);
        break;
      case 'getArchivedBlockByHeight':
        res = await testGetArchivedBlockByHeight(sdk, 1, false);
        break;
      case 'getArchivedBlockByTxId':
        res = await testGetArchivedBlockByTxId(sdk, '67e3e3b205b0402ea2eb8d489c419c7f80ab29e3fa984132a4e38c56207abbaa', false);
        break;
      case 'getArchivedBlockByHash':
        res = await testGetArchivedBlockByHash(sdk, '17zIG4JD+Uu0FrVfug+FlUpnmpTgmGOEWyXgfHuvGok=', false);
        break;
      case 'getArchivedTxByTxId':
        res = await testGetArchivedTxByTxId(sdk, '67e3e3b205b0402ea2eb8d489c419c7f80ab29e3fa984132a4e38c56207abbaa', false);
        break;
      case 'restoreBlock':
        block = await sdk.archive.getFullBlock(1);
        res = await sdk.archive.restoreBlock(Buffer.from(block));
        break;
    }
    sdk.stop();
    console.log(type, ':', JSON.stringify(res, null, 4));
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('archiveBlock');
