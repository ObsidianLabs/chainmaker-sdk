/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const fs = require('fs');
const path = require('path');
// const utils = require('../src/utils');
const sdkInit = require('./sdkInit');
const { sdk, user2, user3, user4, user5 } = sdkInit();

const testGetChainConfig = async (sdk) => {
  const response = await sdk.chainConfig.getChainConfig();
  return response;
};

const testGetChainConfigByBlockHeight = async (sdk, blockHeight) => {
  const response = await sdk.chainConfig.getChainConfigByBlockHeight(blockHeight);
  return response;
};

const testGetChainConfigSequence = async (sdk) => {
  const response = await sdk.chainConfig.getChainConfigSequence();
  return response;
};

const testChainConfigBlockUpdate = async (sdk, params) => {
  const response = await sdk.chainConfig.chainConfigBlockUpdate(params);
  return response;
};

const testChainConfigCoreUpdate = async (sdk, params) => {
  const response = await sdk.chainConfig.chainConfigCoreUpdate(params);
  return response;
};

const testChainConfigTrustRootAdd = async (sdk, params) => {
  const response = await sdk.chainConfig.chainConfigTrustRootAdd(params);
  return response;
};

const testChainConfigTrustRootUpdate = async (sdk, params) => {
  const response = await sdk.chainConfig.chainConfigTrustRootUpdate(params);
  return response;
};

const testChainConfigTrustRootDelete = async (sdk, params) => {
  const response = await sdk.chainConfig.chainConfigTrustRootDelete(params);
  return response;
};

const testChainConfigPermissionAdd = async (sdk, params) => {
  const response = await sdk.chainConfig.chainConfigPermissionAdd(params);
  return response;
};

const testChainConfigPermissionUpdate = async (sdk, params) => {
  const response = await sdk.chainConfig.chainConfigPermissionUpdate(params);
  return response;
};

const testChainConfigPermissionDelete = async (sdk, params) => {
  const response = await sdk.chainConfig.chainConfigPermissionDelete(params);
  return response;
};

const testChainConfigConsensusNodeIdAdd = async (sdk, orgId, nodeIds, userInfoList) => {
  const response = await sdk.chainConfig.chainConfigConsensusNodeIdAdd(orgId, nodeIds, userInfoList);
  return response;
};

const testChainConfigConsensusNodeIdUpdate = async (sdk, orgId, nodeId, newNodeId, userInfoList) => {
  const response = await sdk.chainConfig.chainConfigConsensusNodeIdUpdate(orgId, nodeId, newNodeId, userInfoList);
  return response;
};

const testChainConfigConsensusNodeIdDelete = async (sdk, orgId, nodeId, userInfoList) => {
  const response = await sdk.chainConfig.chainConfigConsensusNodeIdDelete(orgId, nodeId, userInfoList);
  return response;
};

const testChainConfigConsensusNodeOrgAdd = async (sdk, orgId, nodeIds, userInfoList) => {
  const response = await sdk.chainConfig.chainConfigConsensusNodeOrgAdd(orgId, nodeIds, userInfoList);
  return response;
};

const testChainConfigConsensusNodeOrgUpdate = async (sdk, orgId, nodeIds, userInfoList) => {
  const response = await sdk.chainConfig.chainConfigConsensusNodeOrgUpdate(orgId, nodeIds,  userInfoList);
  return response;
};

const testChainConfigConsensusNodeOrgDelete = async (sdk, orgId, userInfoList) => {
  const response = await sdk.chainConfig.chainConfigConsensusNodeOrgDelete(orgId,  userInfoList);
  return response;
};

const testChainConfigConsensusExtAdd = async (sdk, kvs, userInfoList) => {
  const response = await sdk.chainConfig.chainConfigConsensusExtAdd(kvs,  userInfoList);
  return response;
};

const testChainConfigConsensusExtUpdate = async (sdk, kvs, userInfoList) => {
  const response = await sdk.chainConfig.chainConfigConsensusExtUpdate(kvs,  userInfoList);
  return response;
};

const testChainConfigConsensusExtDelete = async (sdk, keys, userInfoList) => {
  const response = await sdk.chainConfig.chainConfigConsensusExtDelete(keys,  userInfoList);
  return response;
};

const test = async (type) => {
  let res;
  try {
    switch (type) {
      case 'getChainConfig':
        res = await testGetChainConfig(sdk);
        break;
      case 'getChainConfigByBlockHeight':
        res = await testGetChainConfigByBlockHeight(sdk, 2);
        break;
      case 'getChainConfigSequence':
        res = await testGetChainConfigSequence(sdk);
        break;
      case 'chainConfigBlockUpdate':
        res = await testChainConfigBlockUpdate(sdk, {
          txTimeout: 700,
          blockTxCapacity: 101,
          blockSize: 11,
          blockInterval: 2001,
          userInfoList: [sdk.userInfo],
        });
        break;
      case 'chainConfigCoreUpdate':
        res = await testChainConfigCoreUpdate(sdk, {
          txSchedulerTimeout: 11,
          txSchedulerValidateTimeout: 11,
          userInfoList: [
            sdk.userInfo,
            user2,
            user3,
          ],
        });
        break;
      case 'chainConfigTrustRootAdd':
        res = await testChainConfigTrustRootAdd(sdk, {
          orgId: 'wx-org5.chainmaker.org',
          root: fs.readFileSync(path.join(__dirname, './wx-org5.chainmaker.org.ca.crt')).toString(),
          userInfoList: [
            sdk.userInfo,
            user2,
            user3,
          ],
        });
        break;
      case 'chainConfigTrustRootUpdate':
        sdk.userInfo = user5;
        res = await testChainConfigTrustRootUpdate(sdk, {
          orgId: 'wx-org5.chainmaker.org',
          root: fs.readFileSync(path.join(__dirname, './wx-org6.chainmaker.org.ca.crt')).toString(),
          userInfoList: [
            sdk.userInfo,
            user2,
            user3,
          ],
        });
        break;
      case 'chainConfigTrustRootDelete':
        res = await testChainConfigTrustRootDelete(sdk, {
          orgId: 'wx-org5.chainmaker.org',
          userInfoList: [
            sdk.userInfo,
            user2,
            user3,
          ],
        });
        break;
      case 'chainConfigPermissionAdd':
        res = await testChainConfigPermissionAdd(sdk, {
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
        break;
      case 'chainConfigPermissionUpdate':
        res = await testChainConfigPermissionUpdate(sdk, {
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
        break;
      case 'chainConfigPermissionDelete':
        res = await testChainConfigPermissionDelete(sdk, {
          permissionResourceName: 'TEST_PREMISSION',
          userInfoList: [
            sdk.userInfo,
            user2,
            user3,
          ],
        });
        break;
      case 'chainConfigConsensusNodeIdAdd':
        res = await testChainConfigConsensusNodeIdAdd(sdk, sdk.userInfo.orgID, ['QmQVkTSF6aWzRSddT3rro6Ve33jhKpsHFaQoVxHKMWzhuN'], [
          sdk.userInfo,
          user2,
          user3,
        ]);
        break;
      case 'chainConfigConsensusNodeIdUpdate':
        res = await testChainConfigConsensusNodeIdUpdate(sdk, sdk.userInfo.orgID, 'QmQVkTSF6aWzRSddT4rro6Ve33jhKpsHFaQoVxHKMWzhuN', 'QmeyNRs2DwWjcHTpcVHoUSaDAAif4VQZ2wQDQAUNDP33gH', [
          sdk.userInfo,
          user2,
          user3,
        ]);
        break;
      case 'chainConfigConsensusNodeIdDelete':
        res = await testChainConfigConsensusNodeIdDelete(sdk, sdk.userInfo.orgID, 'QmeyNRs2DwWjcHTpcVHoUSaDAAif4VQZ2wQDQAUNDP33gH', [
          sdk.userInfo,
          user2,
          user3,
        ]);
        break;
      case 'chainConfigConsensusNodeOrgAdd':
        res = await testChainConfigTrustRootAdd(sdk, {
          orgId: 'wx-org5.chainmaker.org',
          root: fs.readFileSync(path.join(__dirname, './wx-org5.chainmaker.org.ca.crt')).toString(),
          userInfoList: [
            sdk.userInfo,
            user2,
            user3,
          ],
        });
        res = await testChainConfigConsensusNodeOrgAdd(sdk, user5.orgID, ['QmeyNRs2DwWjcHTpcVHoUSaDAAif4VQZ2wQDQAUNDP33gH'], [
          sdk.userInfo,
          user2,
          user3,
        ]);
        break;
      case 'chainConfigConsensusNodeOrgUpdate':
        sdk.userInfo = user5;
        res = await testChainConfigConsensusNodeOrgUpdate(sdk, user5.orgID, ['QmQVkTSF6aWzRSddT4rro6Ve33jhKpsHFaQoVxHKMWzhuN'], [
          sdk.userInfo,
          user2,
          user3,
        ]);
        break;
      case 'chainConfigConsensusNodeOrgDelete':
        sdk.userInfo = user5;
        res = await testChainConfigConsensusNodeOrgDelete(sdk, user5.orgID, [
          sdk.userInfo,
          user2,
          user3,
        ]);
        res = await testChainConfigTrustRootDelete(sdk, {
          orgId: 'wx-org5.chainmaker.org',
          userInfoList: [
            sdk.userInfo,
            user2,
            user3,
          ],
        });
        break;
      case 'chainConfigConsensusExtAdd':
        res = await testChainConfigConsensusExtAdd(sdk, { key001: 'testValue' }, [
          sdk.userInfo,
          user2,
          user3,
          user4,
        ]);
        break;
      case 'chainConfigConsensusExtUpdate':
        res = await testChainConfigConsensusExtUpdate(sdk, { key001: 'testValue123' }, [
          sdk.userInfo,
          user2,
          user3,
          user4,
        ]);
        break;
      case 'chainConfigConsensusExtDelete':
        res = await testChainConfigConsensusExtDelete(sdk, ['key001'], [
          sdk.userInfo,
          user2,
          user3,
          user4,
        ]);
        break;
    }
    console.log(type, ':', JSON.stringify(res, null, 4));
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('getChainConfigSequence');
