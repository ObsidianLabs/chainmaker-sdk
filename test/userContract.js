/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');
const path = require('path');
const assert  = require('assert');
const { sleep } = require('../src/utils');
const contractName = 'go_ctx_004';
const createContractName = 'go_ctx_002';
const contractVersion = 'v1.0.0';
const contractUpGradeVersion = 'v1.0.1';
const contractFilePath = path.join(__dirname, './testFile/rust-fact-2.0.0.wasm');

const { sdk, ['Utils']: utils, user2, user3, user4 } = sdkInit();

describe('user contract manager', async () => {
  // this.timeout(6000);
  before(async () => {
    await sdk.userContractMgr.createUserContract({
      contractName,
      contractVersion,
      contractFilePath,
      runtimeType: 'WASMER',
      params: {
        key1: 'value1',
        key2: 'value2',
      },
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
        user4,
      ],
    });
  });

  it('create user contract', async () => {
    const res = await sdk.userContractMgr.createUserContract({
      contractVersion,
      contractFilePath,
      contractName: createContractName,
      runtimeType: 'WASMER',
      params: {
        key1: 'value1',
        key2: 'value2',
      },
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
        user4,
      ],
    });
    assert.strictEqual(0, res.result.code);
  });

  it('upgrade user contract', async () => {
    await sleep(4);
    const res = await sdk.userContractMgr.upgradeUserContract({
      contractName,
      contractFilePath,
      contractVersion: contractUpGradeVersion,
      runtimeType: 'WASMER',
      params: {},
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
        user4,
      ],
    });
    assert.strictEqual(0, res.result.code);
  });

  it('freeze user contract', async () => {
    await sleep(4);
    const res = await sdk.userContractMgr.freezeUserContract({
      contractName,
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
        user4,
      ],
    });
    assert.strictEqual(0, res.result.code);
  });

  it('unfreeze user contract', async () => {
    await sleep(4);
    const res = await sdk.userContractMgr.unFreezeUserContract({
      contractName,
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
        user4,
      ],
    });
    assert.strictEqual(0, res.result.code);
  });

  it('invoke user contract', async () => {
    await sleep(4);
    const res = await sdk.callUserContract.invokeUserContract({
      contractName, method: 'save', params: {
        file_hash: '1234567890',
        file_name: 'test.txt',
      },
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
        user4,
      ],
    });
    assert.strictEqual(0, res.result.code);
  });

  it('query user contract', async () => {
    await utils.sleep(5);
    const res = await sdk.callUserContract.queryContract({
      contractName, method: 'find_by_file_hash', params: {
        file_hash: '1234567890',
      },
    });
    assert.strictEqual(0, res.result.code);
  });

  // it('revoke user contract', async () => {
  //   const res = await sdk.userContractMgr.revokeUserContract({
  //     contractName: createContractName,
  //   });
  //   assert.strictEqual(0, res.result.code);
  // });

  after('stop sdk', (done) => {
    sdk.stop();
    done();
  });
});
