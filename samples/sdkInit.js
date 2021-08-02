/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const { Sdk, User, Utils /* LoadFromYaml */ } = require('../index');
const fs = require('fs');
const path = require('path');

const nodeConfigArray = [
  {
    nodeAddr: '127.0.0.1:12301',
    tlsEnable: true,
    options: {
      pem: fs.readFileSync(path.join(__dirname, '../test/testFile/crypto-config/wx-org1.chainmaker.org/ca/ca.crt')),
      clientKey: fs.readFileSync(path.join(__dirname, '../test/testFile/crypto-config/wx-org1.chainmaker.org/user/client1/client1.tls.key')),
      clientCert: fs.readFileSync(path.join(__dirname, '../test/testFile/crypto-config/wx-org1.chainmaker.org/user/client1/client1.tls.crt')),
      hostName: 'chainmaker.org',
    },
  },
  {
    nodeAddr: '127.0.0.1:12302',
    tlsEnable: true,
    options: {
      pem: fs.readFileSync(path.join(__dirname, '../test/testFile/crypto-config/wx-org2.chainmaker.org/ca/ca.crt')),
      clientKey: fs.readFileSync(path.join(__dirname, '../test/testFile/crypto-config/wx-org2.chainmaker.org/node/consensus1/consensus1.tls.key')),
      clientCert: fs.readFileSync(path.join(__dirname, '../test/testFile/crypto-config/wx-org2.chainmaker.org/node/consensus1/consensus1.tls.crt')),
      hostName: 'chainmaker.org',
    },
  },
];

const archiveConfig = {
  // dbHost: '127.0.0.1', dbPort: '3306', dbUsername: 'root', dbPassword: '123456',
};

const orgID2 = 'wx-org2.chainmaker.org';
const userKeyPathFile2 = path.join(__dirname, '../test/testFile/crypto-config/wx-org2.chainmaker.org/user/admin1/admin1.sign.key');
const userCertPathFile2 = path.join(__dirname, '../test/testFile/crypto-config/wx-org2.chainmaker.org/user/admin1/admin1.sign.crt');
const orgID3 = 'wx-org3.chainmaker.org';
const userKeyPathFile3 = path.join(__dirname, '../test/testFile/crypto-config/wx-org3.chainmaker.org/user/admin1/admin1.sign.key');
const userCertPathFile3 = path.join(__dirname, '../test/testFile/crypto-config/wx-org3.chainmaker.org/user/admin1/admin1.sign.crt');
const orgID4 = 'wx-org4.chainmaker.org';
const userKeyPathFile4 = path.join(__dirname, '../test/testFile/crypto-config/wx-org4.chainmaker.org/user/admin1/admin1.sign.key');
const userCertPathFile4 = path.join(__dirname, '../test/testFile/crypto-config/wx-org4.chainmaker.org/user/admin1/admin1.sign.crt');
const orgID5 = 'wx-org5.chainmaker.org';
const userKeyPathFile5 = path.join(__dirname, '../test/testFile/wx-org5.chainmaker.org/user/admin1/admin1.sign.key');
const userCertPathFile5 = path.join(__dirname, '../test/testFile/wx-org5.chainmaker.org/user/admin1/admin1.sign.crt');

const user2 = new User(orgID2, userKeyPathFile2, userCertPathFile2);
const user3 = new User(orgID3, userKeyPathFile3, userCertPathFile3);
const user4 = new User(orgID4, userKeyPathFile4, userCertPathFile4);
const user5 = new User(orgID5, userKeyPathFile5, userCertPathFile5);

const init = () => {
  const chainID = 'chain1';
  const orgID = 'wx-org1.chainmaker.org';

  const userKeyPathFile = path.join(__dirname, '../test/testFile/crypto-config/wx-org1.chainmaker.org/user/admin1/admin1.sign.key');
  const userCertPathFile = path.join(__dirname, '../test/testFile/crypto-config/wx-org1.chainmaker.org/user/admin1/admin1.sign.crt');

  const sdk = new Sdk(chainID, orgID, userKeyPathFile, userCertPathFile, nodeConfigArray, 30000, archiveConfig);

  // 也可以使用如下方式从配置文件中获取sdk对象
  // const sdk = new LoadFromYaml(path.join(__dirname, './sdk_config.yaml'));

  return { sdk, Utils, user2, user3, user4, user5 };
};

module.exports = init;
