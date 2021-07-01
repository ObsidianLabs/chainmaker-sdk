/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');

const { sdk } = sdkInit();

const testSubscribeBlock = async (sdk, startBlock, endBlock, withRwSet) => {
  const response = await sdk.subscribe.subscribeBlock(startBlock, endBlock, withRwSet, (block, err) => {
    console.log(block);
    console.log(err);
  });
  return response;
};

const testSubscribeContractEvent = async (sdk, topic, contractName) => {
  const response = await sdk.subscribe.subscribeContractEvent(topic, contractName, (ct, err) => {
    console.log(ct);
    console.log(err);
  });
  return response;
};

const testSubscribeTx = async (sdk, startBlock, endBlock, txType, txIds) => {
  const response = await sdk.subscribe.subscribeTx(startBlock, endBlock, txType, txIds, (tx, err) => {
    console.log(tx);
    console.log(err);
  });
  return response;
};

const test = async (type) => {
  let res;
  try {
    switch (type) {
      case 'subscribeBlock':
        res = testSubscribeBlock(sdk, 0, 200, true);
        break;
      case 'subscribeContractEvent':
        res = testSubscribeContractEvent(sdk, 'topic_vx', 'go_ctx_001');
        break;
      case 'subscribeTx':
        res = testSubscribeTx(sdk, -1, -1, -1, null);
        break;
    }
    console.log(type, ':', res);
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('subscribeContractEvent');
