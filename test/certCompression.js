/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');
const assert  = require('assert');

const { sdk } = sdkInit();

describe('cert Compression', async () => {
  it('enableCertHash', async () => {
    await sdk.certCompression.enableCertHash();
    const chainConfig = await sdk.chainConfig.getChainConfig();

    assert.strictEqual(sdk.chainConfig.chainID, chainConfig.result.chainId);
  });

  it('disableCertHash', async () => {
    await sdk.certCompression.disableCertHash();
    const hash = await sdk.certMgr.getCertHash();
    const chainConfig = await sdk.chainConfig.getChainConfig();

    assert.strictEqual(true, sdk.userInfo.userSignCertBytes !== hash);
    assert.strictEqual(sdk.chainConfig.chainID, chainConfig.result.chainId);
  });

  after('stop sdk', (done) => {
    sdk.stop();
    done();
  });
});
