
/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');

const { sdk } = sdkInit();

const testGetTxByTxId = async (sdk, txId) => {
  const response = await sdk.callSystemContract.getTxByTxId(txId);
  return response;
};

const testGetBlockByHeight = async (sdk, height, withRWSet) => {
  const response = await sdk.callSystemContract.getBlockByHeight(height, withRWSet);
  return response;
};

const testGetBlockByHash = async (sdk, hash, withRWSet) => {
  const response = await sdk.callSystemContract.getBlockByHash(hash, withRWSet);
  return response;
};

const testGetBlockByTxId = async (sdk, txId, withRWSet) => {
  const response = await sdk.callSystemContract.getBlockByTxId(txId, withRWSet);
  return response;
};

const testGetLastConfigBlock = async (sdk, withRWSet) => {
  const response = await sdk.callSystemContract.getLastConfigBlock(withRWSet);
  return response;
};

const testGetNodeChainList = async (sdk, nodeAddr) => {
  const response = await sdk.callSystemContract.getNodeChainList(nodeAddr);
  return response;
};

const testGetChainInfo = async (sdk) => {
  const response = await sdk.callSystemContract.getChainInfo();
  return response;
};

const testGetFullBlockByHeight = async (sdk, height) => {
  const response = await sdk.callSystemContract.getFullBlockByHeight(height);
  return response;
};

const testGetLastBlock = async (sdk, withRWSet) => {
  const response = await sdk.callSystemContract.getLastBlock(withRWSet);
  return response;
};

const testGetArchivedBlockHeight = async (sdk) => {
  const response = await sdk.callSystemContract.getArchivedBlockHeight();
  return response;
};

const testGetBlockHeightByTxId = async (sdk, txId) => {
  const response = await sdk.callSystemContract.getBlockHeightByTxId(txId);
  return response;
};

const testGetBlockHeightByHash = async (sdk, hash) => {
  const response = await sdk.callSystemContract.getBlockHeightByHash(hash);
  return response;
};

const testGetCurrentBlockHeight = async (sdk) => {
  const response = await sdk.callSystemContract.getCurrentBlockHeight();
  return response;
};

const testGetBlockHeaderByHeight = async (sdk, height) => {
  const response = await sdk.callSystemContract.getBlockHeaderByHeight(height);
  return response;
};

const test = async (type) => {
  let res;
  try {
    switch (type) {
      case 'getTxBytxId':
        res = await testGetTxByTxId(sdk, 'b65888090ef4480da79e24d052fdf9d14402083209fa449e80005a70c3344605');
        break;
      case 'getBlockByHeight':
        res = await testGetBlockByHeight(sdk, 2, true);
        break;
      case 'getBlockByHash':
        res = await testGetBlockByHash(sdk, 'UlWykkKLwSd2Y1fNolYPtTXbNkirGCe3pe46mtwXBCw=', true);
        break;
      case 'getBlockByTxId':
        res = await testGetBlockByTxId(sdk, '7144781c006e48dc9c81e354930e537015494a44732d4092bfdfb596166c7794', true);
        break;
      case 'getLastConfigBlock':
        res = await testGetLastConfigBlock(sdk, true);
        break;
      case 'getNodeChainList':
        res = await testGetNodeChainList(sdk, '127.0.0.1:12301');
        break;
      case 'getChainInfo':
        res = await testGetChainInfo(sdk);
        break;
      case 'getFullBlockByHeight':
        res = await testGetFullBlockByHeight(sdk, 0);
        break;
      case 'getLastBlock':
        res = await testGetLastBlock(sdk, true);
        break;
      case 'getArchivedBlockHeight':
        res = await testGetArchivedBlockHeight(sdk, true);
        break;
      case 'getBlockHeightByTxId':
        res = await testGetBlockHeightByTxId(sdk, '93a4282659f94141afe05431978d11390b77065320f648138b00fa02a77ad45b');
        break;
      case 'getBlockHeightByHash':
        res = await testGetBlockHeightByHash(sdk, 'UlWykkKLwSd2Y1fNolYPtTXbNkirGCe3pe46mtwXBCw=');
        break;
      case 'getCurrentBlockHeight':
        res = await testGetCurrentBlockHeight(sdk);
        break;
      case 'getBlockHeaderByHeight':
        res = await testGetBlockHeaderByHeight(sdk, 0);
        break;
    }
    sdk.stop();
    console.log(type, ':', res);
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('getBlockByHeight');
