/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
// const ecMeta = [99, 109, 101, 99, 118, 49, 46, 48, 255, 255, 255, 255, 255, 255, 255, 255];
const ecMagicNum = arr2u8a([99, 109, 101, 99]);
// const ecVersion = arr2u8a([18, 49, 46, 48]);
// const ecReserved = arr2u8a([255, 255, 255, 255, 255, 255, 255, 255]);
// const ecHeader = arr2u8a(ecMeta);
const EasyValueTypeSTRING = 1;
const EasyValueTypeINT32 = 0;
const EasyValueTypeBYTES = 2;

function arr2u8a(arr) {
  const u8a = new Uint8Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    // if(arr[i]>245||arr[i]<0){
    //   throw new Error("param illegal. can't cast this array.");
    // }else{
    u8a[i] = arr[i];
    // }
  }
  return u8a;
}

function getBytesLength() {
  let totalLength = 0;
  let charCode;
  for (let i = 0; i < this.length; i++) {
    charCode = this.charCodeAt(i);
    if (charCode < 0x007f)  {
      totalLength += 1;
    } else if ((0x0080 <= charCode) && (charCode <= 0x07ff))  {
      totalLength += 2;
    } else if ((0x0800 <= charCode) && (charCode <= 0xffff))  {
      totalLength += 3;
    } else {
      totalLength += 4;
    }
  }
  return totalLength;
};

class EasycodecStrItem {
  constructor(keyType, key, valueType, value) {
    this.keyType = keyType;
    this.key = String(Buffer.from(key), 'utf8');;
    this.keyLen = getBytesLength(String(key, 'utf8'));
    this.value = String(Buffer.from(value), 'utf8');;
    this.valueType = valueType;
    this.valueLen = getBytesLength(String(value, 'utf8'));
  }
}

class EasycodecI32Item {
  constructor(keyType, key, valueType, value) {
    this.keyType = keyType;
    this.key = String(Buffer.from(key), 'utf8');
    this.keyLen = getBytesLength(String(key, 'utf8'));
    this.value = value;
    this.valueType = valueType;
    this.valueLen = 4;
  }
}

class EasycodecU8aItem {
  constructor(keyType, key, valueType, value) {
    this.keyType = keyType;
    this.key = String(Buffer.from(key), 'utf8');
    this.keyLen = getBytesLength(String(key, 'utf8'));
    this.value = String(Buffer.from(value), 'utf8');
    this.valueType = valueType;
    this.valueLen = value.length;
  }
}

class EasyCodec {
  // constructor() {
  // this.easycodecItems = [];
  // }
  bin2u32(byteArr) {
    const byte3 = byteArr[3];
    const byte2 = byteArr[2];
    const byte1 = byteArr[1];
    const byte0 = byteArr[0];
    return (byte3 << 24) | (byte2 << 16) | (byte1 << 8) | byte0;
  }

  unmarshalWithBytes(encode) {
    if (!encode) {
      throw new Error('param illegal, expect an Uint8Array encode, but got null.');
    }
    let cursor = 0;
    const result = {
      easycodecItems: [],
    };
    result.encodec = encode;
    const first = encode.slice(0, 4);
    const ecMagicStr = ecMagicNum.slice(0, 4);
    if (first === ecMagicStr) {
      // read meta info
      result.ecMagicNum = encode.slice(0, 4);
      result.ecVersion = encode.slice(4, 8);
      // 4 magicNum + 4 version + 8 ecReserved
      cursor = 16;
    }
    result.kvPairs = this.bin2u32(encode.slice(cursor, cursor + 4));
    cursor = cursor + 4;
    for (let i = 0; i < result.kvPairs; i++) {
      const keytype = this.bin2u32(encode.slice(cursor, cursor + 4));
      cursor = cursor + 4;
      const keylen = this.bin2u32(encode.slice(cursor, cursor + 4));
      cursor = cursor + 4;
      const key = encode.slice(cursor, cursor + keylen);
      cursor = cursor + keylen;
      const valuetype = this.bin2u32(encode.slice(cursor, cursor + 4));
      cursor = cursor + 4;
      const valuelen = this.bin2u32(encode.slice(cursor, cursor + 4));
      cursor = cursor + 4;
      switch (valuetype) {
        case EasyValueTypeSTRING: {
          const strVal = encode.slice(cursor, cursor + valuelen);
          cursor = cursor + valuelen;
          result.easycodecItems.push(new EasycodecStrItem(keytype, key, valuetype, strVal));
          break;
        }
        case EasyValueTypeINT32: {
          const i32Val = this.bin2u32(encode.slice(cursor, cursor + valuelen));
          cursor = cursor + valuelen;
          result.easycodecItems.push(new EasycodecI32Item(keytype, key, valuetype, i32Val));
          break;
        }
        case EasyValueTypeBYTES: {
          const binVal = encode.slice(cursor, cursor + valuelen);
          cursor = cursor + valuelen;
          result.easycodecItems.push(new EasycodecU8aItem(keytype, key, valuetype, binVal));
          break;
        }
        default:
          new Error('not surppose value type ,please check easycodec version .');
      }
    }
    return result;
  }

  easyCodecItemToParamsMap(easyCodecObj) {
    let jsonstring = '{';
    for (let i = 0; i < easyCodecObj.kvPairs; i++) {
      const item = easyCodecObj.easycodecItems[i];
      jsonstring = `${jsonstring}"${item.key}":`;
      switch (item.valueType) {
        case EasyValueTypeSTRING:
          jsonstring = `${jsonstring}"${item.value.replace(/"/g, '\\"')}"`;
          break;
        case EasyValueTypeINT32:
          jsonstring = jsonstring + item.value.toString();
          break;
        case EasyValueTypeBYTES: {
          jsonstring = `${jsonstring}"`;
          const u8a = item.value;
          jsonstring = jsonstring + String(u8a, 'base64');
          jsonstring = `${jsonstring}"`;
          break;
        }
        default:
          break;
      }
      if (i !== easyCodecObj.kvPairs - 1) jsonstring = `${jsonstring},`;
    }
    jsonstring = `${jsonstring}}`;
    return jsonstring;
  }
}

module.exports = EasyCodec;
