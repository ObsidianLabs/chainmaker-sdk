/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');
const assert  = require('assert');

const { sdk } = sdkInit();

// need run
// ./cmc archive dump --type=mysql --dest=root:123456:127.0.0.1:3306 --target=10 --blocks=2 \
//     --chain-id=chain1 \
//     --sdk-conf-path=/Users/chengliang/go/src/chainmaker.org/chainmaker/sdk-go/testdata/sdk_config.yml \
//     --secret-key=123456
describe('archive', async () => {
  it('archiveBlock', async () => {
    const res = await sdk.archive.archiveBlock(2);
    assert.strictEqual(0, res.code);
  });
  it('getArchivedFullBlockByHeight', async () => {
    const res = await sdk.archive.getArchivedFullBlockByHeight(0);
    assert.strictEqual(0, res.block.header.blockHeight);
  });

  it('getArchivedBlockByHeight', async () => {
    const res = await sdk.archive.getArchivedBlockByHeight(0, false);
    assert.strictEqual(0, res.Block.header.blockHeight);
  });

  it('getArchivedBlockByTxId', async () => {
    const block = await sdk.archive.getArchivedBlockByHeight(0, false);
    const res = await sdk.archive.getArchivedBlockByTxId(block.Block.txsList[0].header.txId, false);
    assert.strictEqual(block.Block.header.blockHeight, res.Block.header.blockHeight);
  });

  it('getArchivedBlockByHash', async () => {
    const block = await sdk.archive.getArchivedBlockByHeight(0, false);
    const res = await sdk.archive.getArchivedBlockByHash(block.Block.header.blockHash, false);
    assert.strictEqual(block.Block.header.blockHeight, res.Block.header.blockHeight);
  });

  it('getArchivedBlockByTxId', async () => {
    const block = await sdk.archive.getArchivedBlockByHeight(0, false);
    const res = await sdk.archive.getArchivedTxByTxId(block.Block.txsList[0].header.txId, false);
    assert.strictEqual(block.Block.header.blockHeight, res.BlockHeight);
  });

  it('restoreBlock', async () => {
    const block = await sdk.archive.getFullBlock(2);
    const res = await sdk.archive.restoreBlock(Buffer.from(block));
    console.log(res);
    assert.strictEqual(0, res.code);
  });

  after('stop sdk', (done) => {
    sdk.stop();
    done();
  });
});
