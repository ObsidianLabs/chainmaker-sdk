/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const fs = require('fs');
const sdkInit = require('./sdkInit');
// const UserInfo = require('../src/sdk/userInfo');
// const utils = require('../src/utils');

const { sdk, user2, user3, user4 } = sdkInit();

const testGetCertHash = async (sdk) => {
  const response = await sdk.certMgr.getCertHash();
  return response;
};

const testAddCert = async (sdk) => {
  const response = await sdk.certMgr.addCert();
  return response;
};

const testQueryCert = async (sdk, certHash) => {
  const response = await sdk.certMgr.queryCert([certHash]);
  return response;
};

const testDeleteCert = async (sdk, certHash, userInfoList) => {
  const response = await sdk.certMgr.deleteCert([certHash], userInfoList);
  return response;
};

const testCertManageFrozen = async (sdk, certs, userInfoList) => {
  const response = await sdk.certMgr.certManageFrozen([certs], userInfoList);
  return response;
};

const testCertManageUnfrozen = async (sdk, certs, userInfoList) => {
  const response = await sdk.certMgr.certManageUnfrozen([certs], userInfoList);
  return response;
};

const testCertManageRevoke = async (sdk, crl, userInfoList) => {
  const response = await sdk.certMgr.certManageRevoke(crl, userInfoList);
  return response;
};

const test = async (type) => {
  let res;
  try {
    switch (type) {
      case 'getCertHash':
        res = await testGetCertHash(sdk);
        break;
      case 'addCert':
        res = await testAddCert(sdk);
        break;
      case 'queryCert':
        res = await testQueryCert(sdk, '91111d730a5ec6c834c5c502198aa67a2aee0882e0af764e65b4e396b6acb134');
        break;
      case 'deleteCert':
        res = await testDeleteCert(sdk, '91111d730a5ec6c834c5c502198aa67a2aee0882e0af764e65b4e396b6acb134', [
          sdk.userInfo,
          user2, user3, user4,
        ]);
        break;
      case 'certManageFrozen':
        res = await testCertManageFrozen(sdk, fs.readFileSync('/Users/chengliang/go/src/chainmaker.org/chainmaker-go/build/release/chainmaker-V1.0.0-wx-org2.chainmaker.org/config/wx-org2.chainmaker.org/certs/user/client1/client1.sign.crt').toString(), [
          sdk.userInfo,
          user2, user3, user4,
        ]);
        break;
      case 'certManageUnfrozen':
        res = await testCertManageUnfrozen(sdk, fs.readFileSync('/Users/chengliang/go/src/chainmaker.org/chainmaker-go/build/release/chainmaker-V1.0.0-wx-org2.chainmaker.org/config/wx-org2.chainmaker.org/certs/user/client1/client1.sign.crt').toString(), [
          sdk.userInfo,
          user2, user3, user4,
        ]);
        break;
      case 'certManageRevoke':
        res = await testCertManageRevoke(sdk, fs.readFileSync('/Users/chengliang/workspaces/chainMakerNodeSdk/sm/chainmaker-sdk-js/test/testFile/crypto-config/wx-org2.chainmaker.org/user/client1/client1.crl').toString(), [
          sdk.userInfo,
          user2, user3, user4,
        ]);
        break;
    }
    console.log(type, ':', JSON.stringify(res));
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('certManageRevoke');
