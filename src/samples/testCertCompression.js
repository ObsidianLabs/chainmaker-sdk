/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('../sdkInit');
const { sdk } = sdkInit();

const testEnableCertHash = async (sdk) => {
  const response = await sdk.certCompression.enableCertHash();
  return response;
};

const testDisableCertHash = async (sdk) => {
  const response = await sdk.certCompression.disableCertHash();
  return response;
};

const testGetChainConfig = async (sdk) => {
  const response = await sdk.chainConfig.getChainConfig();
  return response;
};

const test = async (type) => {
  let res;
  try {
    switch (type) {
      case 'enableCertHash':
        res = await testEnableCertHash(sdk);
        console.log(res);
        res = await testGetChainConfig(sdk);
        break;
      case 'disableCertHash':
        res = await testEnableCertHash(sdk);
        console.dir(sdk.userInfo);
        res = await testDisableCertHash(sdk);
        console.dir(sdk.userInfo);
        res = await testGetChainConfig(sdk);
        break;
    }
    console.log(type, ':', JSON.stringify(res));
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('disableCertHash');
