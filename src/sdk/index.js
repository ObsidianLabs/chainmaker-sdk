/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const UserContractMgr = require('./userContractMgr');
const CallUserContract = require('./callUserContract');
const CallSystemContract = require('./callSystemContract');
const ChainConfig = require('./chainConfig');
const UserInfo = require('./userInfo');
const CertMgr = require('./certMgr');
const Subscribe = require('./subscribe');
const CertCompression = require('./certCompression');
const easyCodec = require('./easycodec');
const Archive = require('./archive');
const Node = require('../node');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

class Sdk {
  // 后续要加参数校验
  constructor(
    chainID,
    orgID,
    userSignKeyPath,
    userSignCertPath,
    nodeConfigArray,
    timeout,
    archiveConfig = {},
  ) {
    if (typeof(chainID) !== 'string') throw new Error(`[chainID] must be string: ${chainID}`);
    this.chainID = chainID;

    /* nodeList 是node类的数组 */
    this.node = new Node(nodeConfigArray, timeout);

    this.userInfo = new UserInfo(orgID, userSignKeyPath, userSignCertPath);

    this.callSystemContract = new CallSystemContract(chainID, this.userInfo, this.node);

    this.chainConfig = new ChainConfig(chainID, this.userInfo, this.node);

    this.certMgr = new CertMgr(this.chainConfig, this.callSystemContract, chainID, this.userInfo, this.node);

    this.subscribe = new Subscribe(chainID, this.userInfo, this.node);

    this.userContractMgr = new UserContractMgr(chainID, this.userInfo, this.node, this.callSystemContract);

    this.callUserContract = new CallUserContract(chainID, this.userInfo, this.node, this.callSystemContract);

    this.certCompression = new CertCompression(this.userInfo, this.certMgr);

    this.easyCodec = easyCodec;

    this.archive = new Archive(chainID, this.userInfo, this.node, this.callSystemContract, archiveConfig);
  }

  getChainMakerServerVersion() {
    return this.node.getChainMakerServerVersion();
  }

  stop() {
    this.archive.disconnect();
    this.node.close();
  }
}

module.exports = Sdk;
