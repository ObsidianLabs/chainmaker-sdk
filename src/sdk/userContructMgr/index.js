/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils = require('../../utils');
const cv = require('../../utils/constValue');
const _ = require('loadsh');
const fs = require('fs');

class UserContruct {
  constructor(chainID, userInfo, node) {
    this.chainID = chainID;
    this.userInfo = userInfo;
    this.node = node;
  }

  checkParam(method, contractName, contractVersion, runtimeType, contractFilePath, params) {
    switch (method) {
      case utils.common.ManageUserContractFunction.INIT_CONTRACT:
      case utils.common.ManageUserContractFunction.UPGRADE_CONTRACT:
        // 先做个简单的验证，后续再进行更加严格的验证
        if (method === undefined || !contractName || !contractVersion || runtimeType === undefined
          || !contractFilePath || params === undefined) {
          throw new Error('createUserContract: Parameter error');
        }
        if (!cv.runtimeType.includes(runtimeType)) {
          throw new Error(`runTimeType: Unsupported value: ${runtimeType}`);
        }
        if (!cv.userContructMgrMethod.includes(method)) {
          throw new Error(`method: Unsupported value: ${method}`);
        }
        break;
	    case utils.common.ManageUserContractFunction.FREEZE_CONTRACT:
      case utils.common.ManageUserContractFunction.UNFREEZE_CONTRACT:
      case utils.common.ManageUserContractFunction.REVOKE_CONTRACT:
        // 先做个简单的验证，后续再进行更加严格的验证
        if (method === undefined || !contractName) {
          throw new Error('createUserContract: Parameter error');
        }
        break;
      default:
        throw new Error('createUserContract: Parameter error');
    }
  }

  createContractCreatePayload({ contractName, contractVersion, runtimeType, contractFilePath, params }) {
    const method = utils.common.ManageUserContractFunction.INIT_CONTRACT;
    this.checkParam(method, contractName, contractVersion, runtimeType, contractFilePath, params);
    return this.createUserContractPayload({
      method, contractName, contractVersion,
      runtimeType, contractFilePath, params,
    });
  }
  // return promise
  createUserContract({ contractName, contractVersion, runtimeType, contractFilePath, params }) {
    const payload = this.createContractCreatePayload({
      contractName, contractVersion,
      runtimeType, contractFilePath, params,
    });
    const signedPayloadBytesArray = this.signContractManagePayload(payload, [this.userInfo]);
    return this.sendRequest(signedPayloadBytesArray);
  }

  createContractUpgradePayload({ contractName, contractVersion, runtimeType, contractFilePath, params }) {
    const method = utils.common.ManageUserContractFunction.UPGRADE_CONTRACT;
    this.checkParam(method, contractName, contractVersion, runtimeType, contractFilePath, params);
    return this.createUserContractPayload({
      method, contractName, contractVersion,
      runtimeType, contractFilePath, params,
    });
  }
  // return promise
  upgradeUserContract({ contractName, contractVersion, runtimeType, contractFilePath, params }) {
    const payload = this.createContractUpgradePayload({
      contractName, contractVersion,
      runtimeType, contractFilePath, params,
    });
    const signedPayloadBytesArray = this.signContractManagePayload(payload, [this.userInfo]);
    return this.sendRequest(signedPayloadBytesArray);
  }

  createContractFreezePayload({ contractName }) {
    const method = utils.common.ManageUserContractFunction.FREEZE_CONTRACT;
    this.checkParam(method, contractName);
    return this.createUserContractPayload({
      method, contractName,
    });
  }
  // return promise
  freezeUserContract({ contractName }) {
    const payload = this.createContractFreezePayload({
      contractName,
    });
    const signedPayloadBytesArray = this.signContractManagePayload(payload, [this.userInfo]);
    return this.sendRequest(signedPayloadBytesArray);
  }

  createContractUnfreezePayload({ contractName }) {
    const method = utils.common.ManageUserContractFunction.UNFREEZE_CONTRACT;
    this.checkParam(method, contractName);
    return this.createUserContractPayload({
      method, contractName,
    });
  }
  // return promise
  unFreezeUserContract({ contractName }) {
    const payload = this.createContractUnfreezePayload({
      contractName,
    });
    const signedPayloadBytesArray = this.signContractManagePayload(payload, [this.userInfo]);
    return this.sendRequest(signedPayloadBytesArray);
  }

  createContractRevokePayload({ contractName }) {
    const method = utils.common.ManageUserContractFunction.REVOKE_CONTRACT;
    this.checkParam(method, contractName);
    return this.createUserContractPayload({
      method, contractName,
    });
  }
  // return promise
  revokeUserContract({ contractName }) {
    const payload = this.createContractRevokePayload({
      contractName,
    });
    const signedPayloadBytesArray = this.signContractManagePayload(payload, [this.userInfo]);
    return this.sendRequest(signedPayloadBytesArray);
  }

  /* user contract ...
   * params: k-v
   */
  createUserContractPayload({ method, contractName, contractVersion, runtimeType, contractFilePath, params }) {
    this.checkParam(method, contractName, contractVersion, runtimeType, contractFilePath, params);

    // contract_id
    const contractId = new utils.common.ContractId();
    contractId.setContractName(contractName);

    // ContractMgmtPayload
    let contractBytesRaw;
    const payload = new utils.common.ContractMgmtPayload();

    payload.setMethod(utils.enum2str(utils.common.ManageUserContractFunction, method));
    switch (method) {
      case utils.common.ManageUserContractFunction.INIT_CONTRACT:
      case utils.common.ManageUserContractFunction.UPGRADE_CONTRACT:
        contractId.setContractVersion(contractVersion);
        contractId.setRuntimeType(runtimeType);
        contractBytesRaw = fs.readFileSync(contractFilePath);
        payload.setByteCode(contractBytesRaw);
        Object.keys(params).forEach((key) => {
          const param = new utils.common.KeyValuePair();
          param.setKey(key);
          param.setValue(params[key]);
          payload.addParameters(param);
        });
        break;
	    case utils.common.ManageUserContractFunction.FREEZE_CONTRACT:
      case utils.common.ManageUserContractFunction.UNFREEZE_CONTRACT:
      case utils.common.ManageUserContractFunction.REVOKE_CONTRACT:
        // Do nothing
        break;
      default:
        // Do nothing
        break;
    }

    payload.setChainId(this.chainID);
    payload.setContractId(contractId);
    // console.log(JSON.stringify(payload.toObject(), 4, null));
    return payload;
  }

  signContractManagePayload(payload, userInfoList) {
    // return utils.signPayload(
    //   payload, this.userInfo.userSignKeyBytes,
    //   this.userInfo.userSignCertBytes, this.userInfo.orgID,
    // );
    const signedPayloadBytesArray = [];
    for (let i = 0; i < userInfoList.length; i++) {
      signedPayloadBytesArray.push(utils.signPayload(
        _.cloneDeep(payload), userInfoList[i].userSignKeyBytes,
        userInfoList[i].userSignCertBytes, userInfoList[i].orgID, this.userInfo.isFullCert,
      ));
    }
    return signedPayloadBytesArray;
  }

  mergeContractManageSignedPayload(signedPayloadBytesArray) {
    if (!Array.isArray(signedPayloadBytesArray)) {
      throw new Error('sendUserContractPayload: signedPayloadBytesArray mast be array');
    }
    return utils.mergeContractMgmtPayload(signedPayloadBytesArray, utils.common.ContractMgmtPayload);
  }

  async sendContractManageRequest(mergedPayload) {
    const txId = utils.newTxID();
    const request = utils.newRequest(
      txId,
      this.chainID,
      utils.common.TxType.MANAGE_USER_CONTRACT,
      this.userInfo.orgID,
      this.userInfo.userSignCertBytes,
      this.userInfo.isFullCert,
      mergedPayload.serializeBinary(),
      this.userInfo.userSignKeyBytes,
    );

    const result = await this.node.sendRequest(request);
    return { txId, result };
  }

  // return promise
  async sendRequest(signedPayloadBytesArray) {
    const mergedPayload = this.mergeContractManageSignedPayload(
      signedPayloadBytesArray,
      utils.common.ContractMgmtPayload,
    );

    const txId = utils.newTxID();
    const request = utils.newRequest(
      txId,
      this.chainID,
      utils.common.TxType.MANAGE_USER_CONTRACT,
      this.userInfo.orgID,
      this.userInfo.userSignCertBytes,
      this.userInfo.isFullCert,
      mergedPayload.serializeBinary(),
      this.userInfo.userSignKeyBytes,
    );

    const result = await this.node.sendRequest(request);
    return { txId, result };
  }
}

module.exports = UserContruct;
