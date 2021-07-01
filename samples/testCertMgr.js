/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const fs = require('fs');
const sdkInit = require('./sdkInit');
// const UserInfo = require('../src/sdk/userInfo');
// const utils = require('../src/utils');

const { sdk } = sdkInit();

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

const testDeleteCert = async (sdk, certHash) => {
  const response = await sdk.certMgr.deleteCert([certHash]);
  return response;
};

const testCertManageFrozen = async (sdk, certs) => {
  const response = await sdk.certMgr.certManageFrozen([certs]);
  return response;
};

const testCertManageUnfrozen = async (sdk, certs) => {
  const response = await sdk.certMgr.certManageUnfrozen([certs]);
  return response;
};

const testCertManageRevoke = async (sdk, crl) => {
  const response = await sdk.certMgr.certManageRevoke(crl);
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
        res = await testQueryCert(sdk, '570e10e6128624743365be66f352488e87cbb91698977f36dab09f99bd1fd304');
        break;
      case 'deleteCert':
        res = await testDeleteCert(sdk, '570e10e6128624743365be66f352488e87cbb91698977f36dab09f99bd1fd304');
        break;
      case 'certManageFrozen':
        res = await testCertManageFrozen(sdk, fs.readFileSync('/Users/chengliang/go/src/chainmaker.org/chainmaker-go/build/release/chainmaker-V1.0.0-wx-org2.chainmaker.org/config/wx-org2.chainmaker.org/certs/user/client1/client1.sign.crt').toString());
        break;
      case 'certManageUnfrozen':
        res = await testCertManageUnfrozen(sdk, fs.readFileSync('/Users/chengliang/go/src/chainmaker.org/chainmaker-go/build/release/chainmaker-V1.0.0-wx-org2.chainmaker.org/config/wx-org2.chainmaker.org/certs/user/client1/client1.sign.crt').toString());
        break;
      case 'certManageRevoke':
        res = await testCertManageRevoke(sdk, fs.readFileSync('/Users/chengliang/go/src/chainmaker.org/chainmaker-go/build/release/chainmaker-V1.0.0-wx-org2.chainmaker.org/config/wx-org2.chainmaker.org/certs/user/client1/client1.crl').toString());
        break;
    }
    console.log(type, ':', JSON.stringify(res));
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('queryCert');
