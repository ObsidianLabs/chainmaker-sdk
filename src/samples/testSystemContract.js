
/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('../sdkInit');

const { sdk } = sdkInit();

const testGetTxByTxId = async (sdk, txId) => {
  const response = await sdk.callSystemContruct.getTxByTxId(txId);
  return response;
};

const testGetBlockByHeight = async (sdk, height, withRWSet) => {
  const response = await sdk.callSystemContruct.getBlockByHeight(height, withRWSet);
  return response;
};

const testGetBlockByHash = async (sdk, hash, withRWSet) => {
  const response = await sdk.callSystemContruct.getBlockByHash(hash, withRWSet);
  return response;
};

const testGetBlockByTxId = async (sdk, txId, withRWSet) => {
  const response = await sdk.callSystemContruct.getBlockByTxId(txId, withRWSet);
  return response;
};

const testGetLastConfigBlock = async (sdk, withRWSet) => {
  const response = await sdk.callSystemContruct.getLastConfigBlock(withRWSet);
  return response;
};

const testGetNodeChainList = async (sdk, nodeAddr) => {
  const response = await sdk.callSystemContruct.getNodeChainList(nodeAddr);
  return response;
};

const testGetChainInfo = async (sdk) => {
  const response = await sdk.callSystemContruct.getChainInfo();
  return response;
};

const testGetFullBlockByHeight = async (sdk, height) => {
  const response = await sdk.callSystemContruct.getFullBlockByHeight(height);
  return response;
};

const testGetLastBlock = async (sdk, withRWSet) => {
  const response = await sdk.callSystemContruct.getLastBlock(withRWSet);
  return response;
};

const testGetArchivedBlockHeight = async (sdk) => {
  const response = await sdk.callSystemContruct.getArchivedBlockHeight();
  return response;
};

const testGetBlockHeightByTxId = async (sdk, txId) => {
  const response = await sdk.callSystemContruct.getBlockHeightByTxId(txId);
  return response;
};

const testGetBlockHeightByHash = async (sdk, hash) => {
  const response = await sdk.callSystemContruct.getBlockHeightByHash(hash);
  return response;
};

const testGetCurrentBlockHeight = async (sdk) => {
  const response = await sdk.callSystemContruct.getCurrentBlockHeight();
  return response;
};

const testGetBlockHeaderByHeight = async (sdk, height) => {
  const response = await sdk.callSystemContruct.getBlockHeaderByHeight(height);
  return response;
};

const test = async (type) => {
  let res;
  try {
    switch (type) {
      case 'getTxBytxId':
        res = await testGetTxByTxId(sdk, 'b7fa8fbfc64f40c7a731942267c9ee111a5fc02c2ac747ae9c866837a401fbde');
        break;
      case 'getBlockByHeight':
        res = await testGetBlockByHeight(sdk, 2, true);
        break;
      case 'getBlockByHash':
        res = await testGetBlockByHash(sdk, 'sqUq4gjRbFL2jHO9CYi1Hw2RizJvMmi3d//HFZqsLz8=', true);
        break;
      case 'getBlockByTxId':
        res = await testGetBlockByTxId(sdk, 'b7fa8fbfc64f40c7a731942267c9ee111a5fc02c2ac747ae9c866837a401fbde', true);
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
        res = await testGetBlockHeightByTxId(sdk, 'b7fa8fbfc64f40c7a731942267c9ee111a5fc02c2ac747ae9c866837a401fbde');
        break;
      case 'getBlockHeightByHash':
        res = await testGetBlockHeightByHash(sdk, 'sqUq4gjRbFL2jHO9CYi1Hw2RizJvMmi3d//HFZqsLz8=');
        break;
      case 'getCurrentBlockHeight':
        res = await testGetCurrentBlockHeight(sdk);
        break;
      case 'getBlockHeaderByHeight':
        res = await testGetBlockHeaderByHeight(sdk, 0);
        break;
    }
    sdk.stop();
    console.log(type, ':', JSON.stringify(res));
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('getChainInfo');
