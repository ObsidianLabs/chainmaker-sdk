/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils = require('../utils');
const fs = require('fs');

class UserInfo {
  constructor(orgID, userSignKeyPath, userSignCertPath) {
    if (typeof(orgID) !== 'string') throw new Error(`[orgID] must be a string: ${orgID}`);
    if (typeof(userSignKeyPath) !== 'string') throw new Error(`[userSignKeyPath] must be a string: ${userSignKeyPath}`);
    if (typeof(userSignCertPath) !== 'string') throw new Error(`[userSignCertPath] must be a string: ${userSignCertPath}`);
    const userSignKeyBytes = utils.loadPrivateKey(userSignKeyPath);
    const userSignCertBytes = fs.readFileSync(userSignCertPath);
    this.orgID = orgID;
    this.userSignCertBytes = userSignCertBytes;
    this.userSignKeyBytes = userSignKeyBytes;
    this.isFullCert = true;
    this.tmpUserSignCertBytes = '';
    this.certHash = null;
  }
}
module.exports = UserInfo;
