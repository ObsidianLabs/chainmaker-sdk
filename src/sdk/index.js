/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const UserContructMgr = require('./userContructMgr');
const CallUserContruct = require('./callUserContruct');
const CallSystemContruct = require('./callSystemContract');
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
    this.chainID = chainID;

    /* nodeList 是node类的数组 */
    this.node = new Node(nodeConfigArray, timeout);

    this.userInfo = new UserInfo(orgID, userSignKeyPath, userSignCertPath);
    this.userContructMgr = new UserContructMgr(chainID, this.userInfo, this.node);

    this.callUserContruct = new CallUserContruct(chainID, this.userInfo, this.node);

    this.callSystemContruct = new CallSystemContruct(chainID, this.userInfo, this.node);

    this.chainConfig = new ChainConfig(chainID, this.userInfo, this.node);

    this.certMgr = new CertMgr(this.chainConfig, chainID, this.userInfo, this.node);

    this.subscribe = new Subscribe(chainID, this.userInfo, this.node);

    this.certCompression = new CertCompression(this.userInfo, this.certMgr);

    this.easyCodec = easyCodec;

    this.archive = new Archive(chainID, this.userInfo, this.node, this.callSystemContruct, archiveConfig);
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
