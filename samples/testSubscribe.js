/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('./sdkInit');

const { sdk } = sdkInit();

const testSubscribeBlock = async (sdk, startBlock, endBlock, onlyHeader, withRwSet) => {
  const response = await sdk.subscribe.subscribeBlock(startBlock, endBlock, withRwSet, onlyHeader, (block, err) => {
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

const testSubscribeTx = async (sdk, startBlock, endBlock, contractName, txIds) => {
  const response = await sdk.subscribe.subscribeTx(startBlock, endBlock, contractName, txIds, (tx, err) => {
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
        res = testSubscribeBlock(sdk, 10, 12, true, true);
        break;
      case 'subscribeContractEvent':
        res = testSubscribeContractEvent(sdk, 'topic_vx', 'go_ctx_003');
        break;
      case 'subscribeTx':
        res = testSubscribeTx(sdk, -1, -1, null, null);
        break;
    }
    console.log(type, ':', res);
  } catch (err) {
    console.log(type, ':', err);
  }
};

test('subscribeContractEvent');
