/*
 Copyright (C) BABEC. All rights reserved.
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const crypto = require('crypto');
const winston = require('winston');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const createLogger = (service) => {
  let level = 'info';
  if (process.env.LOG_LEVEL === 'DEBUG') level = 'debug';
  const logger = winston.createLogger({
    level,
    format: winston.format.json(),
    defaultMeta: { service },
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      // new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console({
        level,
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple(),
        ),
      }),
    ],
  });
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));

  return logger;
};

const logger = createLogger('util');

const common = {
  ...require('../../chainmaker/common/block_pb'),
  ...require('../../chainmaker/common/contract_pb'),
  // ...require('../../chainmaker/common/multi_sign_pb'),
  ...require('../../chainmaker/common/request_pb'),
  ...require('../../chainmaker/common/result_pb'),
  ...require('../../chainmaker/common/rwset_pb'),
  ...require('../../chainmaker/common/transaction_pb'),
};

const accesscontrol = {
  ...require('../../chainmaker/accesscontrol/member_pb'),
  ...require('../../chainmaker/accesscontrol/policy_pb'),
};

const api = {
  ...require('../../chainmaker/api/rpc_node_grpc_pb'),
};

const config = {
  ...require('../../chainmaker/config/chain_config_pb'),
  ...require('../../chainmaker/config/chainmaker_server_pb'),
  ...require('../../chainmaker/config/local_config_pb'),
  ...require('../../chainmaker/config/log_config_pb'),
};

const discovery = {
  ...require('../../chainmaker/discovery/discovery_pb'),
};

const store = {
  ...require('../../chainmaker/store/store_pb'),
};

const newTxID = () => {
  let id = `${uuidv4()}${uuidv4()}`;
  id = id.replace(/-/g, '');
  return id.replace(/-/g, '');
};

const getRequestUnsignedRaw = (request) => {
  const headerBytes = request.getHeader().serializeBinary();
  return Buffer.concat([headerBytes, request.getPayload()]);
};

const signTx = (request, privateKey) => {
  const rawData = getRequestUnsignedRaw(request);
  const signedData = signDataSha256(rawData, privateKey);
  request.setSignature(signedData);
};

const newRequestHeader = (txId, chainID, txType, orgID, userCertBytes, isFullCert) => {
  const header = new common.TxHeader();
  header.setChainId(chainID);
  header.setTxType(txType);
  header.setTxId(txId);
  header.setTimestamp(Date.now() / 1000 | 0);
  header.setExpirationTime(0);

  header.setSender(newSender(orgID, userCertBytes, isFullCert));

  return header;
};

const signDataSha256 = (data, privateKey) => {
  // var dataHash = crypto.createHash('sha256').update(data);
  const sign = crypto.createSign('sha256');
  sign.update(data);
  return sign.sign(privateKey);
};

const newSender = (orgID, userCertBytes, isFullCert) => {
  const sender = new accesscontrol.SerializedMember();
  sender.setOrgId(orgID);
  sender.setMemberInfo(userCertBytes);
  sender.setIsFullCert(isFullCert);
  return sender;
};

const mergeContractMgmtPayload = (payloadByteList, enumType) => {
  const mergedPayload = enumType.deserializeBinary(payloadByteList[0]);
  const endorsementList = mergedPayload.getEndorsementList();
  mergedPayload.setEndorsementList(null);
  const baseContent = mergedPayload.serializeBinary();

  for (const payload of payloadByteList.slice(1)) {
    const tmpPayload = new enumType.deserializeBinary(payload);

    const tmpEndorsementList = tmpPayload.getEndorsementList();
    tmpPayload.setEndorsementList(null);
    const tmpContent = tmpPayload.serializeBinary();
    if (0 !== Buffer.compare(baseContent, tmpContent)) {
      logger.error(
        'payload content not match! base:\n',
        JSON.stringify(mergedPayload.toObject, null, 4),
        ', target:\n',
        JSON.stringify(tmpPayload.toObject, null, 4),
      );
      return null;
    }
    for (const endorsement of tmpEndorsementList) {
      endorsementList.push(endorsement);
    }
  }

  mergedPayload.setEndorsementList(endorsementList);

  return mergedPayload;
};

const newRequest = (txId, chainID, txType, orgID, userCertBytes, isFullCert, payload, userPrivateKey) => {
  const request = new common.TxRequest();
  request.setHeader(newRequestHeader(txId, chainID, txType, orgID, userCertBytes, isFullCert));
  request.setPayload(payload);
  signTx(request, userPrivateKey);

  return request;
};

const loadPrivateKey = (keyPathFile) => {
  const keyBytes = fs.readFileSync(keyPathFile);
  const privateKey = crypto.createPrivateKey(keyBytes);
  return privateKey;
};

const signPayload = (payload, userSignKeyBytes, userSignCertBytes, orgID, isFullCert) => {
  const payloadBytes = payload.serializeBinary();

  /* 2. sign payload */
  const signedData = signDataSha256(payloadBytes, userSignKeyBytes);

  /* isFullCert default to true for the time being */
  const sender = newSender(orgID, userSignCertBytes, isFullCert);

  const entry = new common.EndorsementEntry();
  entry.setSigner(sender);
  entry.setSignature(signedData);

  payload.addEndorsement(entry);

  const signedPayloadBytes = payload.serializeBinary();

  return signedPayloadBytes;
};

const enum2str = (enumType, enumValue) => {
  // for (const k in enumType) if (enumType[k] == enumValue) return k;
  let result;
  Object.keys(enumType).forEach((key) => {
    if (enumType[key] === enumValue) result = key;
  });
  return result;
};

const pemDecode = (certbytes) => {
  let certStr = certbytes.toString();
  const tmpArr = certStr.split('\n');
  for (let i = tmpArr.length - 1; i >= 0; i--) {
    if (tmpArr[i].indexOf('---') === -1) {
      tmpArr.pop();
    } else {
      break;
    }
  }
  tmpArr.pop();
  tmpArr.shift();
  certStr = tmpArr.join('');
  return Buffer.from(certStr, 'base64');
};

const getCertHash = (certbytes, hashType) => {
  const certDer = pemDecode(certbytes);
  const hash = crypto.createHash(hashType);
  hash.update(certDer);
  return hash.digest().toString('hex');
};

const sleep = second => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, second * 1000);
});

module.exports = {
  common,
  accesscontrol,
  api,
  config,
  discovery,
  store,
  createLogger,
  signDataSha256,
  newSender,
  mergeContractMgmtPayload,
  newRequest,
  loadPrivateKey,
  signPayload,
  enum2str,
  newTxID,
  pemDecode,
  getCertHash,
  sleep,
};
