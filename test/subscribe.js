/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');
const assert  = require('assert');

const { sdk } = sdkInit();

describe('subscribe', () => {
  it('subscribeBlock', async () => {
    const { err, blockHeight } = await new Promise((resolve) => {
      sdk.subscribe.subscribeBlock(5, 10, false, true, (block, err) => {
        resolve({ err, blockHeight: block.blockHeight });
      });
    });
    assert.strictEqual(null, err);
    assert.strictEqual('number', typeof(blockHeight));
  });

  // it('subscribeTx', async (done) => {
  //   sdk.subscribe.subscribeTx(-1, -1, -1, null, (tx, err) => {
  //     assert.strictEqual(null, err);
  //     assert.strictEqual(sdk.subscribe.chainID, tx.header.chainId);
  //     done();
  //   });
  // });

  // it('subscribeContractEvent', async (done) => {
  //   sdk.subscribe.subscribeContractEvent('topic_vx', 'go_ctx_010', (tx, err) => {
  //     assert.strictEqual(null, err);
  //     assert.strictEqual(sdk.subscribe.chainID, tx.header.chainId);
  //     done();
  //   });
  // });

  after('stop sdk', (done) => {
    sdk.stop();
    done();
  });
});
