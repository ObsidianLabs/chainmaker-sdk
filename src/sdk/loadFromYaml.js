const Sdk = require('./');
const fs = require('fs');
const YAML = require('yamljs');

class LoadFromYaml extends Sdk {
  constructor(configPath) {
    const yamlString = fs.readFileSync(configPath).toString();
    const { chainID, orgID, userSignKeyPath, userSignCertPath, timeout, ['nodes']: nodeConfigArray, archiveConfig } = YAML.parse(yamlString).chainClient;
    for (let i = 0; i < nodeConfigArray.length; i++) {
      nodeConfigArray[i].options.pem = fs.readFileSync(nodeConfigArray[i].options.pem);
      nodeConfigArray[i].options.clientKey = fs.readFileSync(nodeConfigArray[i].options.clientKey);
      nodeConfigArray[i].options.clientCert = fs.readFileSync(nodeConfigArray[i].options.clientCert);
    }
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
