/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const sdkInit = require('../sdkInit');
const { sdk } = sdkInit();

const test = async () => {
  const easycodec = new sdk.easyCodec();
  let obj = easycodec.unmarshalWithBytes([
    1, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 107, 101, 121,
    66, 121, 116, 101, 115, 1, 0, 0, 0, 40, 0, 0, 0, 99,
    104, 97, 105, 110, 109, 97, 107, 101, 114, 233, 149,
    191, 229, 174, 137, 233, 147, 190, 33, 64, 35, 36, 37,
    94, 38, 42, 40, 41, 95, 43, 45, 61, 123, 125, 124,
    58, 63, 62, 60,
  ]);
  let res = easycodec.easyCodecItemToParamsMap(obj);
  console.log(res);

  obj = easycodec.unmarshalWithBytes([
    1, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 107, 101, 121, 73, 110, 116, 51, 50, 0, 0, 0, 0, 4, 0, 0, 0, 21, 205, 91, 7,
  ]);
  res = easycodec.easyCodecItemToParamsMap(obj);
  console.log(res);

  obj = easycodec.unmarshalWithBytes([
    1, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 107, 101, 121,
    66, 121, 116, 101, 115, 1, 0, 0, 0, 40, 0, 0, 0,
    99, 104, 97, 105, 110, 109, 97, 107, 101, 114, 233,
    149, 191, 229, 174, 137, 233, 147, 190, 33, 64, 35,
    36, 37, 94, 38, 42, 40, 41, 95, 43, 45, 61, 123, 125,
    124, 58, 63, 62, 60,
  ]);
  res = easycodec.easyCodecItemToParamsMap(obj);
  console.log(res);

  obj = easycodec.unmarshalWithBytes([
    3, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 107, 101, 121, 66,
    121, 116, 101, 115, 2, 0, 0, 0, 40, 0, 0, 0, 99, 104,
    97, 105, 110, 109, 97, 107, 101, 114, 233, 149, 191,
    229, 174, 137, 233, 147, 190, 33, 64, 35, 36, 37, 94, 38,
    42, 40, 41, 95, 43, 45, 61, 123, 125, 124, 58, 63, 62,
    60, 1, 0, 0, 0, 8, 0, 0, 0, 107, 101, 121, 73, 110,
    116, 51, 50, 0, 0, 0, 0, 4, 0, 0, 0, 21, 205, 91,
    7, 1, 0, 0, 0, 6, 0, 0, 0, 107, 101, 121, 83, 116,
    114, 1, 0, 0, 0, 40, 0, 0, 0, 99, 104, 97, 105,
    110, 109, 97, 107, 101, 114, 233, 149, 191, 229, 174,
    137, 233, 147, 190, 33, 64, 35, 36, 37, 94, 38, 42,
    40, 41, 95, 43, 45, 61, 123, 125, 124, 58, 63, 62, 60,
  ]);
  res = easycodec.easyCodecItemToParamsMap(obj);
  console.log(res);
};

test();
