/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('../sdkInit');
const { sdk, ['Utils']: utils } = sdkInit();

const testCreateUserContract = async (sdk, contractName, contractVersion, contractFilePath) => {
  const response = await sdk.userContractMgr.createUserContract({
    contractName,
    contractVersion,
    contractFilePath,
    runtimeType: utils.common.RuntimeType.GASM,
    params: {
      key1: 'value1',
      key2: 'value2',
    },
  });
  return response;
};

const testUpgradeUserContract = async (sdk, contractName, contractVersion, contractFilePath) => {
  const response = await sdk.userContractMgr.upgradeUserContract({
    contractName,
    contractVersion,
    contractFilePath,
    runtimeType: utils.common.RuntimeType.GASM,
    params: {},
  });
  return response;
};

const testFreezeUserContract = async (sdk, contractName) => {
  const response = await sdk.userContractMgr.freezeUserContract({
    contractName,
  });
  return response;
};

const testUnFreezeUserContract = async (sdk, contractName) => {
  const response = await sdk.userContractMgr.unFreezeUserContract({
    contractName,
  });
  return response;
};

const testRevokeUserContract = async (sdk, contractName) => {
  const response = await sdk.userContractMgr.revokeUserContract({
    contractName,
  });
  return response;
};

const testInvokeUserContract = async (sdk, contractName) => {
  const response = await sdk.callUserContract.invokeUserContract({
    contractName, method: 'save', params: {
      file_hash: '1234567890',
      file_name: 'test.txt',
    },
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
  const contractFilePath = '/Users/chengliang/workspaces/chainMakerNodeSdk/node-sdk/test/testFile/go_ctx.wasm';
  let res;
  try {
    switch (type) {
      case 'create':
        res = await testCreateUserContract(sdk, contractName, contractVersion, contractFilePath);
        break;
      case 'upgrade':
        res = await testUpgradeUserContract(sdk, contractName, contractVersion, contractFilePath);
        break;
      case 'freeze':
        res = await testFreezeUserContract(sdk, contractName);
        break;
      case 'unfreeze':
        res = await testUnFreezeUserContract(sdk, contractName);
        break;
      case 'revoke':
        res = await testRevokeUserContract(sdk, contractName);
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

test('invoke');
