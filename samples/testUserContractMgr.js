/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');
const { sdk, user2, user3, user4 } = sdkInit();
const path = require('path');

const testCreateUserContract = async (sdk, contractName, contractVersion, contractFilePath, userInfoList) => {
  const response = await sdk.userContractMgr.createUserContract({
    contractName,
    contractVersion,
    contractFilePath,
    runtimeType: 'WASMER',
    params: {},
    withSyncResult: true,
    userInfoList,
  });
  return response;
};

const testUpgradeUserContract = async (sdk, contractName, contractVersion, contractFilePath, userInfoList) => {
  const response = await sdk.userContractMgr.upgradeUserContract({
    contractName,
    contractVersion,
    contractFilePath,
    runtimeType: 'WASMER',
    params: {},
    withSyncResult: true,
    userInfoList,
  });
  return response;
};

const testFreezeUserContract = async (sdk, contractName, userInfoList) => {
  const response = await sdk.userContractMgr.freezeUserContract({
    contractName,
    withSyncResult: true,
    userInfoList,
  });
  return response;
};

const testUnFreezeUserContract = async (sdk, contractName, userInfoList) => {
  const response = await sdk.userContractMgr.unFreezeUserContract({
    contractName,
    withSyncResult: true,
    userInfoList,
  });
  return response;
};

const testRevokeUserContract = async (sdk, contractName, userInfoList) => {
  const response = await sdk.userContractMgr.revokeUserContract({
    contractName,
    withSyncResult: true,
    userInfoList,
  });
  return response;
};

const testInvokeUserContract = async (sdk, contractName) => {
  const response = await sdk.callUserContract.invokeUserContract({
    contractName, method: 'save', params: {
      file_hash: '1234567890',
      file_name: 'test.txt',
      time: Date.now() / 1000 | 0,
    },
    withSyncResult: true,
  });
  return response;
};

const testQueryUserContract = async (sdk, contractName) => {
  const response = await sdk.callUserContract.queryContract({
    contractName, method: 'find_by_file_hash', params: {
      file_hash: '1234567890',
    },
  });
  return response;
};


const test = async (type) => {
  const contractName = 'go_ctx_010';
  const contractVersion = 'v1.0.0';
  const updateVersion = 'v2.0.1';
  const contractFilePath = path.join(__dirname, '../test/testFile/rust-fact-2.0.0.wasm');
  let res;
  try {
    switch (type) {
      case 'create':
        res = await testCreateUserContract(sdk, contractName, contractVersion, contractFilePath, [
          sdk.userInfo,
          user2,
          user3,
          user4,
        ]);
        break;
      case 'upgrade':
        res = await testUpgradeUserContract(sdk, contractName, updateVersion, contractFilePath, [
          sdk.userInfo,
          user2,
          user3,
          user4,
        ]);
        break;
      case 'freeze':
        res = await testFreezeUserContract(sdk, contractName, [
          sdk.userInfo,
          user2,
          user3,
          user4,
        ]);
        break;
      case 'unfreeze':
        res = await testUnFreezeUserContract(sdk, contractName, [
          sdk.userInfo,
          user2,
          user3,
          user4,
        ]);
        break;
      case 'revoke':
        res = await testRevokeUserContract(sdk, contractName, [
          sdk.userInfo,
          user2,
          user3,
          user4,
        ]);
        break;
      case 'invoke':
        res = await testInvokeUserContract(sdk, contractName);
        break;
      case 'query':
        res = await testQueryUserContract(sdk, contractName);
        break;
    }

    sdk.stop();
    console.log(type, ':', res);
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('query');
