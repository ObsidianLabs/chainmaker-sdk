/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');
const path = require('path');
const assert  = require('assert');

const { sdk } = sdkInit();

describe('system contract', async () => {
  it('getTxByTxId', async () => {
    const block = await sdk.callSystemContract.getBlockByHeight(2, false);
    const res = await sdk.callSystemContract.getTxByTxId(block.result.block.txsList[0].payload.txId);
    // assert.strictEqual(0, res.result.code);
    assert.strictEqual(0, res.result.transaction.result.code);
  });

  it('getBlockByHeight', async () => {
    const block = await sdk.callSystemContract.getBlockByHeight(2, false);
    assert.strictEqual(2, block.result.block.header.blockHeight);
  });

  it('getBlockByHash', async () => {
    const block = await sdk.callSystemContract.getBlockByHeight(2, false);
    const res = await sdk.callSystemContract.getBlockByHash(block.result.block.header.blockHash, false);;
    assert.strictEqual(2, res.result.block.header.blockHeight);
  });

  it('getBlockByTxId', async () => {
    const block = await sdk.callSystemContract.getBlockByHeight(2, false);
    const res = await sdk.callSystemContract.getBlockByTxId(block.result.block.txsList[0].payload.txId, false);
    assert.strictEqual(2, res.result.block.header.blockHeight);
  });

  it('getLastConfigBlock', async () => {
    const res = await sdk.callSystemContract.getLastConfigBlock(false);
    assert.strictEqual(1, res.result.block.header.blockType);
  });

  it('getNodeChainList', async () => {
    const res = await sdk.callSystemContract.getNodeChainList(sdk.node.addrArray[0]);
    assert.strictEqual(true, res.result.chainIdListList.indexOf(sdk.callSystemContract.chainID) > -1);
  });

  it('getChainInfo', async () => {
    const res = await sdk.callSystemContract.getChainInfo();
    assert.strictEqual(true, JSON.stringify(res).indexOf(sdk.node.addrArray[0].split(':')[0]) > -1);
  });

  it('getFullBlockByHeight', async () => {
    const block = await sdk.callSystemContract.getFullBlockByHeight(2);
    assert.strictEqual(2, block.result.block.header.blockHeight);
  });

  it('getLastBlock', async () => {
    const block = await sdk.callSystemContract.getLastBlock(false);
    const res = await sdk.callSystemContract.getChainInfo();
    assert.strictEqual(res.result.blockHeight, block.result.block.header.blockHeight);
  });

  it('getArchivedBlockHeight', async () => {
    const res = await sdk.callSystemContract.getArchivedBlockHeight();
    assert.strictEqual(0, res.result.code);
  });

  it('getBlockHeightByTxId', async () => {
    const block = await sdk.callSystemContract.getBlockByHeight(2, false);
    const res = await sdk.callSystemContract.getBlockHeightByTxId(block.result.block.txsList[0].payload.txId);
    assert.strictEqual(2, parseInt(Buffer.from(res.result.contractResult.result, 'base64').toString(), 10));
  });

  it('getBlockHeightByHash', async () => {
    const block = await sdk.callSystemContract.getBlockByHeight(2, false);
    const res = await sdk.callSystemContract.getBlockHeightByHash(block.result.block.header.blockHash, false);
    assert.strictEqual(2, parseInt(Buffer.from(res.result.contractResult.result, 'base64').toString(), 10));
  });

  it('getCurrentBlockHeight', async () => {
    const chainInfo = await sdk.callSystemContract.getChainInfo();
    const res = await sdk.callSystemContract.getCurrentBlockHeight();
    assert.strictEqual(chainInfo.result.blockHeight, parseInt(res, 10));
  });

  it('getBlockHeaderByHeight', async () => {
    const res = await sdk.callSystemContract.getBlockHeaderByHeight(2);
    assert.strictEqual(2, res.result.blockHeight);
  });

  after('stop sdk', (done) => {
    sdk.stop();
    done();
  });
});
