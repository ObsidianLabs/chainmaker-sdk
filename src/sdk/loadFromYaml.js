/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const Sdk = require('./');
const fs = require('fs');
const YAML = require('yamljs');

class LoadFromYaml extends Sdk {
  constructor(configPath) {
    const yamlString = fs.readFileSync(configPath).toString();
    // To be compatible with other SDKs
    const {
      ['chain_id']: chainID,
      ['org_id']: orgID,
      ['user_key_file_path']: userSignKeyPath,
      ['user_crt_file_path']: userSignCertPath,
      // ['user_sign_key_file_path']: signKeyPath,
      // ['user_sign_crt_file_path']: signCertPath,
      ['nodes']: nodeConfigArray,
      ['archive']: archiveConfig,
    } = YAML.parse(yamlString).chain_client;
    const timeout = 30000;
    for (let i = 0; i < nodeConfigArray.length; i++) {
      nodeConfigArray[i].options = {};
      nodeConfigArray[i].nodeAddr = nodeConfigArray[i].node_addr;
      delete nodeConfigArray[i].node_addr;
      nodeConfigArray[i].tlsEnable = nodeConfigArray[i].enable_tls;
      delete nodeConfigArray[i].enable_tls;

      nodeConfigArray[i].options.pem = fs.readFileSync(nodeConfigArray[i].trust_root_paths[0]);
      delete nodeConfigArray[i].trust_root_paths;
      nodeConfigArray[i].options.clientKey = fs.readFileSync(nodeConfigArray[i].tls_client_key);
      delete nodeConfigArray[i].tls_client_key;
      nodeConfigArray[i].options.clientCert = fs.readFileSync(nodeConfigArray[i].tls_client_cert);
      delete nodeConfigArray[i].tls_client_cert;
      nodeConfigArray[i].options.hostName = nodeConfigArray[i].tls_host_name;
      delete nodeConfigArray[i].tls_host_name;
    }
    const dbArray = archiveConfig.dest.split(':');
    const [dbUsername, dbPassword, dbHost, dbPort] = dbArray;
    archiveConfig.dbUsername = dbUsername;
    archiveConfig.dbPassword = dbPassword;
    archiveConfig.dbHost = dbHost;
    archiveConfig.dbPort = dbPort;

    delete archiveConfig.dest;
    super(
      chainID,
      orgID,
      userSignKeyPath,
      userSignCertPath,
      nodeConfigArray,
      timeout,
      archiveConfig,
    );
  }
}

module.exports = LoadFromYaml;
