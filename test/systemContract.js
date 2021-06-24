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
    const block = await sdk.callSystemContruct.getBlockByHeight(5, false);
    const res = await sdk.callSystemContruct.getTxByTxId(block.result.block.txsList[0].header.txId);
    assert.strictEqual(0, res.result.code);
    assert.strictEqual(0, res.result.contractResult.code);
  });

  it('getBlockByHeight', async () => {
    const block = await sdk.callSystemContruct.getBlockByHeight(2, false);
    assert.strictEqual(2, block.result.block.header.blockHeight);
  });

  it('getBlockByHash', async () => {
    const block = await sdk.callSystemContruct.getBlockByHeight(2, false);
    const res = await sdk.callSystemContruct.getBlockByHash(block.result.block.header.blockHash, false);;
    assert.strictEqual(2, res.result.block.header.blockHeight);
  });

  it('getBlockByTxId', async () => {
    const block = await sdk.callSystemContruct.getBlockByHeight(2, false);
    const res = await sdk.callSystemContruct.getBlockByTxId(block.result.block.txsList[0].header.txId, false);
    assert.strictEqual(2, res.result.block.header.blockHeight);
  });

  it('getLastConfigBlock', async () => {
    const res = await sdk.callSystemContruct.getLastConfigBlock(false);
    assert.strictEqual(true, Buffer.from(res.result.block.txsList[0].requestPayload, 'base64').toString()
      .indexOf('SYSTEM_CONTRACT_CHAIN_CONFIG') > -1);
  });

  it('getNodeChainList', async () => {
    const res = await sdk.callSystemContruct.getNodeChainList(sdk.node.addrArray[0]);
    assert.strictEqual(true, res.result.chainIdListList.indexOf(sdk.callSystemContruct.chainID) > -1);
  });

  it('getChainInfo', async () => {
    const res = await sdk.callSystemContruct.getChainInfo();
    assert.strictEqual(true, JSON.stringify(res).indexOf(sdk.node.addrArray[0].split(':')[0]) > -1);
  });

  it('getFullBlockByHeight', async () => {
    const block = await sdk.callSystemContruct.getFullBlockByHeight(2);
    assert.strictEqual(2, block.result.block.header.blockHeight);
  });

  it('getLastBlock', async () => {
    const block = await sdk.callSystemContruct.getLastBlock(false);
    const res = await sdk.callSystemContruct.getChainInfo();
    assert.strictEqual(res.result.blockHeight, block.result.block.header.blockHeight);
  });

  it('getArchivedBlockHeight', async () => {
    const res = await sdk.callSystemContruct.getArchivedBlockHeight();
    assert.strictEqual(0, res.result.code);
  });

  it('getBlockHeightByTxId', async () => {
    const block = await sdk.callSystemContruct.getBlockByHeight(2, false);
    const res = await sdk.callSystemContruct.getBlockHeightByTxId(block.result.block.txsList[0].header.txId);
    assert.strictEqual(2, parseInt(Buffer.from(res.result.contractResult.result, 'base64').toString(), 10));
  });

  it('getBlockHeightByHash', async () => {
    const block = await sdk.callSystemContruct.getBlockByHeight(2, false);
    const res = await sdk.callSystemContruct.getBlockHeightByHash(block.result.block.header.blockHash, false);
    assert.strictEqual(2, parseInt(Buffer.from(res.result.contractResult.result, 'base64').toString(), 10));
  });

  it('getCurrentBlockHeight', async () => {
    const chainInfo = await sdk.callSystemContruct.getChainInfo();
    const res = await sdk.callSystemContruct.getCurrentBlockHeight();
    assert.strictEqual(chainInfo.result.blockHeight, parseInt(res, 10));
  });

  it('getBlockHeaderByHeight', async () => {
    const res = await sdk.callSystemContruct.getBlockHeaderByHeight(2);
    assert.strictEqual(2, res.result.blockHeight);
  });

  after('stop sdk', (done) => {
    sdk.stop();
    done();
  });
});
