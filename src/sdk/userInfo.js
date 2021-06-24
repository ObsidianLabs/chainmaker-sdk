/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils = require('../utils');
const fs = require('fs');

class UserInfo {
  constructor(orgID, userSignKeyPath, userSignCertPath) {
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
