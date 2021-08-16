/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');
const path = require('path');
const assert  = require('assert');
const fs = require('fs');
const { sleep } = require('../src/utils');

const { sdk, ['Utils']: utils, user2, user3, user4, user5 } = sdkInit();

describe('chain config', async () => {
  it('getChainConfig', async () => {
    const chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(sdk.chainConfig.chainID, chainConfig.result.chainId);
  });

  it('getChainConfigByBlockHeight', async () => {
    const chainConfig = await sdk.chainConfig.getChainConfigByBlockHeight(2);
    assert.strictEqual(sdk.chainConfig.chainID, chainConfig.result.chainId);
  });

  it('getChainConfigSequence', async () => {
    const sequence = await sdk.chainConfig.getChainConfigSequence();
    assert.strictEqual('number', typeof(parseInt(sequence, 10)));
  });

  it('chainConfigBlockUpdate', async () => {
    await sdk.chainConfig.chainConfigBlockUpdate({
      txTimeout: 700,
      blockTxCapacity: 101,
      blockSize: 11,
      blockInterval: 2001,
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
      ],
    });
    await sleep(5);
    const chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(700, chainConfig.result.block.txTimeout);
    assert.strictEqual(101, chainConfig.result.block.blockTxCapacity);
    assert.strictEqual(11, chainConfig.result.block.blockSize);
    assert.strictEqual(2001, chainConfig.result.block.blockInterval);
  });

  it('chainConfigCoreUpdate', async () => {
    await sdk.chainConfig.chainConfigCoreUpdate({
      txSchedulerTimeout: 11,
      txSchedulerValidateTimeout: 11,
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
      ],
    });
    await sleep(5);
    const chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(11, chainConfig.result.core.txSchedulerTimeout);
    assert.strictEqual(11, chainConfig.result.core.txSchedulerValidateTimeout);
  });

  it('chain config trust root manager, chainc onfig consensus node org', async () => {
    await sdk.chainConfig.chainConfigTrustRootAdd({
      orgId: 'wx-org5.chainmaker.org',
      roots: [fs.readFileSync(path.join(__dirname, './testFile/wx-org5.chainmaker.org/ca/ca.crt')).toString()],
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
      ],
    });
    await sleep(5);
    let chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(true, JSON.stringify(chainConfig.result.trustRootsList).indexOf('wx-org5.chainmaker.org') > -1);

    const { ['sdk']: sdkUser5 } = sdkInit();
    sdkUser5.userInfo = user5;
    await sdkUser5.chainConfig.chainConfigConsensusNodeOrgAdd(user5.orgID, ['QmeyNRs2DwWjcHTpcVHoUSaDAAif4VQZ2wQDQAUNDP33gH'], [
      sdk.userInfo,
      user2,
      user3,
    ]);
    await sleep(5);
    chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(true, JSON.stringify(chainConfig.result.consensus.nodesList).indexOf('QmeyNRs2DwWjcHTpcVHoUSaDAAif4VQZ2wQDQAUNDP33gH') > -1);

    await sdkUser5.chainConfig.chainConfigConsensusNodeOrgUpdate(user5.orgID, ['QmQVkTSF6aWzRSddT4rro6Ve33jhKpsHFaQoVxHKMWzhuN'], [
      sdk.userInfo,
      user2,
      user3,
    ]);
    await sleep(5);
    chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(true, JSON.stringify(chainConfig.result.consensus.nodesList).indexOf('QmQVkTSF6aWzRSddT4rro6Ve33jhKpsHFaQoVxHKMWzhuN') > -1);
    assert.strictEqual(-1, JSON.stringify(chainConfig.result.consensus.nodesList).indexOf('QmeyNRs2DwWjcHTpcVHoUSaDAAif4VQZ2wQDQAUNDP33gH'));

    await sdkUser5.chainConfig.chainConfigConsensusNodeOrgDelete(user5.orgID, [
      sdk.userInfo,
      user2,
      user3,
    ]);
    await sleep(5);
    chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(-1, JSON.stringify(chainConfig.result.consensus.nodesList).indexOf('QmQVkTSF6aWzRSddT4rro6Ve33jhKpsHFaQoVxHKMWzhuN'));

    await sdkUser5.chainConfig.chainConfigTrustRootUpdate({
      orgId: 'wx-org5.chainmaker.org',
      roots: [fs.readFileSync(path.join(__dirname, './testFile/wx-org6.chainmaker.org/ca/ca.crt')).toString()],
      userInfoList: [
        sdkUser5.userInfo,
        user2,
        user3,
      ],
    });
    await sleep(5);
    const chainConfigUpdate = await sdk.chainConfig.getChainConfig();
    let index = 0;
    for (let i = 0; i < chainConfigUpdate.result.trustRootsList.length; i++) {
      if (chainConfigUpdate.result.trustRootsList[i] === 'wx-org5.chainmaker.org') {
        index = i;
        break;
      }
    }
    assert.strictEqual(
      true,
      chainConfigUpdate.result.trustRootsList[index].root === chainConfig.result.trustRootsList[index].root,
    );
    sdkUser5.stop();

    await sdk.chainConfig.chainConfigTrustRootDelete({
      orgId: 'wx-org5.chainmaker.org',
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
      ],
    });
    await sleep(5);
    chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(-1, JSON.stringify(chainConfig.result.trustRootsList).indexOf('wx-org5.chainmaker.org'));
  });

  it('chain config permission manager', async () => {
    await sdk.chainConfig.chainConfigPermissionAdd({
      permissionResourceName: 'TEST_PREMISSION',
      rule: 'ANY',
      // orgList: [orgID2, orgID3, sdk.userInfo.orgID],
      // roleList: ['ADMIN'],
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
      ],
    });
    await sleep(5);
    let chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(true, JSON.stringify(chainConfig.result.resourcePoliciesList).indexOf('TEST_PREMISSION') > -1);

    await sdk.chainConfig.chainConfigPermissionUpdate({
      permissionResourceName: 'TEST_PREMISSION',
      rule: 'ANY',
      orgList: [user2.orgID, user3.orgID, sdk.userInfo.orgID],
      roleList: ['ADMIN'],
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
      ],
    });
    await sleep(5);
    chainConfig = await sdk.chainConfig.getChainConfig();
    let index = 0;
    chainConfig.result.resourcePoliciesList.forEach((police, i) => {
      if (police.resourceName === 'TEST_PREMISSION') {
        index = i;
      }
    });
    assert.strictEqual(Array([user2.orgID, user3.orgID, sdk.userInfo.orgID]).join(','), chainConfig.result.resourcePoliciesList[index].policy.orgListList.join(','));

    await sdk.chainConfig.chainConfigPermissionDelete({
      permissionResourceName: 'TEST_PREMISSION',
      userInfoList: [
        sdk.userInfo,
        user2,
        user3,
      ],
    });
    await sleep(5);
    chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(-1, JSON.stringify(chainConfig.result.resourcePoliciesList).indexOf('TEST_PREMISSION'));
  });

  it('chain config consensus nodeId manager', async () => {
    await sdk.chainConfig.chainConfigConsensusNodeIdAdd(sdk.userInfo.orgID, ['QmQVkTSF6aWzRSddT3rro6Ve33jhKpsHFaQoVxHKMWzhuN'], [
      sdk.userInfo,
      user2,
      user3,
    ]);
    await sleep(30);
    let chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(true, JSON.stringify(chainConfig.result.consensus.nodesList).indexOf('QmQVkTSF6aWzRSddT3rro6Ve33jhKpsHFaQoVxHKMWzhuN') > -1);

    await sdk.chainConfig.chainConfigConsensusNodeIdUpdate(sdk.userInfo.orgID, 'QmQVkTSF6aWzRSddT3rro6Ve33jhKpsHFaQoVxHKMWzhuN', 'QmeyNRs2DwWjcHTpcVHoUSaDAAif4VQZ2wQDQAUNDP33gH', [
      sdk.userInfo,
      user2,
      user3,
    ]);
    await sleep(5);
    chainConfig = await sdk.chainConfig.getChainConfig();
    // console.log(chainConfig.result.consensus.nodesList);
    assert.strictEqual(true, JSON.stringify(chainConfig.result.consensus.nodesList).indexOf('QmeyNRs2DwWjcHTpcVHoUSaDAAif4VQZ2wQDQAUNDP33gH') > -1);

    await sdk.chainConfig.chainConfigConsensusNodeIdDelete(sdk.userInfo.orgID, 'QmeyNRs2DwWjcHTpcVHoUSaDAAif4VQZ2wQDQAUNDP33gH', [
      sdk.userInfo,
      user2,
      user3,
    ]);
    await sleep(5);
    chainConfig = await sdk.chainConfig.getChainConfig();
    assert.strictEqual(-1, JSON.stringify(chainConfig.result.consensus.nodesList).indexOf('QmeyNRs2DwWjcHTpcVHoUSaDAAif4VQZ2wQDQAUNDP33gH'));
  });

  after('stop sdk', (done) => {
    sdk.stop();
    done();
  });
});
