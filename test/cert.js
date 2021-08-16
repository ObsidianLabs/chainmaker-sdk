/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');
const fs = require('fs');
const path = require('path');
const assert  = require('assert');
const { sleep } = require('../src/utils');

const { sdk, user2, user3, user4 } = sdkInit();

describe('cert manager', async () => {
  it('get certHash', async () => {
    const hash = await sdk.certMgr.getCertHash();
    assert.strictEqual('string', typeof(hash));
  });

  it('add cert', async () => {
    await sdk.certMgr.addCert();
    await sleep(5);
    const hash = await sdk.certMgr.getCertHash();
    const queryHash = await sdk.certMgr.queryCert([hash]);
    let index = 0;
    queryHash.result.certInfosList.forEach((cert, i) => {
      if (cert.hash.indexOf(hash) > -1) index = i;
    });
    assert.strictEqual(true, queryHash.result.certInfosList[index].cert !== '');
  });

  it('query cert', async () => {
    const hash = await sdk.certMgr.getCertHash();
    const queryHash = await sdk.certMgr.queryCert([hash]);
    let index = 0;
    queryHash.result.certInfosList.forEach((cert, i) => {
      if (cert.hash.indexOf(hash) > -1) index = i;
    });
    assert.strictEqual(true, queryHash.result.certInfosList[index].cert !== '');
  });

  it('delete cert', async () => {
    const hash = await sdk.certMgr.getCertHash();
    await sdk.certMgr.deleteCert([hash], [
      sdk.userInfo,
      user2, user3, user4,
    ]);
    await sleep(5);
    const queryHash = await sdk.certMgr.queryCert([hash]);
    let index = 0;
    queryHash.result.certInfosList.forEach((cert, i) => {
      if (cert.hash.indexOf(hash) > -1) index = i;
    });
    assert.strictEqual(true, queryHash.result.certInfosList[index].cert === '');
  });

  it('certManageFrozen', async () => {
    await sleep(4);
    const res = await sdk.certMgr.certManageFrozen([fs.readFileSync(path.join(__dirname, './testFile/crypto-config/wx-org2.chainmaker.org/user/client1/client1.sign.crt')).toString()], [
      sdk.userInfo,
      user2, user3, user4,
    ]);
    assert.strictEqual(0, res.result.code);
  });

  it('certManageUnfrozen', async () => {
    await sleep(4);
    const res = await sdk.certMgr.certManageUnfrozen([fs.readFileSync(path.join(__dirname, './testFile/crypto-config/wx-org2.chainmaker.org/user/client1/client1.sign.crt')).toString()], [
      sdk.userInfo,
      user2, user3, user4,
    ]);
    assert.strictEqual(0, res.result.code);
  });

  it('certManageRevoke', async () => {
    await sleep(4);
    const res = await sdk.certMgr.certManageRevoke(fs.readFileSync(path.join(__dirname, './testFile/crypto-config/wx-org2.chainmaker.org/user/client1/client1.sign.crt')).toString(), [
      sdk.userInfo,
      user2, user3, user4,
    ]);
    assert.strictEqual(0, res.result.code);
  });

  after('stop sdk', (done) => {
    sdk.stop();
    done();
  });
});
