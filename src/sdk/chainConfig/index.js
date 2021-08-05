/*
 Copyright (C) THL A29 Limited, a Tencent company. All rights reserved.
   SPDX-License-Identifier: Apache-2.0
 */
const utils = require('../../utils');
const cv = require('../../utils/constValue');
const _ = require('loadsh');

class ChainConfig {
  constructor(chainID, userInfo, node) {
    this.chainID = chainID;
    this.userInfo = userInfo;
    this.node = node;
    this.commonObj = {
      chainId: this.chainID,
      contractName: utils.enum2str(utils.sysContract.SystemContract, utils.sysContract.SystemContract.CHAIN_CONFIG),
    };
  }

  // return promise
  async getChainConfig() {
    const payload = utils.buildPayload({
      ...this.commonObj,
      txType: utils.common.TxType.QUERY_CONTRACT,
      method: utils.enum2str(
        utils.sysContract.ChainConfigFunction,
        utils.sysContract.ChainConfigFunction.GET_CHAIN_CONFIG,
      ),
      sequence: cv.DEFAULT_SEQUENCE,
    });
    const response = await this.sendPayload(
      payload,
      cv.NEED_SRC_RESPONSE,
    );
    response.result = utils.config.ChainConfig.deserializeBinary(response.result).toObject();
    return response;
  }

  // return promise
  async getChainConfigSequence() {
    const response = await this.getChainConfig();
    return response.result.sequence;
  }

  // return promise
  async getChainConfigByBlockHeight(blockHeight) {
    const parameters = {};
    parameters[cv.keys.KeyChainConfigContractBlockHeight] = Buffer.from(`${blockHeight}`);
    const payload = utils.buildPayload({
      parameters,
      ...this.commonObj,
      txType: utils.common.TxType.QUERY_CONTRACT,
      method: utils.enum2str(
        utils.sysContract.ChainConfigFunction,
        utils.sysContract.ChainConfigFunction.GET_CHAIN_CONFIG_AT,
      ),
      sequence: cv.DEFAULT_SEQUENCE,
    });
    const response = await this.sendPayload(
      payload,
      cv.NEED_SRC_RESPONSE,
    );
    response.result = utils.config.ChainConfig.deserializeBinary(response.result).toObject();
    return response;
  }

  async createChainConfigBlockUpdatePayload({
    txTimestampVerify, txTimeout = -1, blockTxCapacity = -1, blockSize = -1, blockInterval = -1,
  }) {
    const params = {};
    if (txTimeout !== -1 && txTimeout < 600) {
      throw new Error('[tx_timeout] should be [600, +∞)');
    } else {
      params.tx_timeout = `${txTimeout}`;
    }

    if (txTimestampVerify !== undefined) {
      params.tx_timestamp_verify = txTimestampVerify;
    }

    if (blockTxCapacity !== -1 && blockTxCapacity < 1) {
      throw new Error('[block_tx_capacity] should be (0, +∞]');
    } else {
      params.block_tx_capacity = `${blockTxCapacity}`;
    }

    if (blockSize !== -1 && blockSize < 1) {
      throw new Error('[block_size] should be (0, +∞]');
    } else {
      params.block_size = `${blockSize}`;
    }

    if (blockInterval !== -1 && blockInterval < 10) {
      throw new Error('[block_interval] should be [10, +∞]');
    } else {
      params.block_interval = `${blockInterval}`;
    }

    return await this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.BLOCK_UPDATE),
      params,
    });
  }
  // return promise
  async chainConfigBlockUpdate({
    txTimestampVerify, txTimeout = -1, blockTxCapacity = -1, blockSize = -1, blockInterval = -1, userInfoList,
  }) {
    const payload = await this.createChainConfigBlockUpdatePayload({
      txTimestampVerify, txTimeout, blockTxCapacity, blockSize, blockInterval,
    });
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  ceateChainConfigCoreUpdatePayload({
    txSchedulerTimeout = -1, txSchedulerValidateTimeout = -1,
  }) {
    const params = {};
    if (txSchedulerTimeout !== -1 && txSchedulerTimeout > 0 && txSchedulerTimeout <= 60) {
      params.tx_scheduler_timeout = `${txSchedulerTimeout}`;
    } else {
      throw new Error('[tx_scheduler_timeout] should be [0, 60]');
    }

    if (txSchedulerValidateTimeout !== -1 && txSchedulerValidateTimeout > 0 && txSchedulerValidateTimeout <= 60) {
      params.tx_scheduler_validate_timeout = `${txSchedulerValidateTimeout}`;
    } else {
      throw new Error('[tx_scheduler_validate_timeout] should be [0, 60]');
    }

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.CORE_UPDATE),
      params,
    });
  }
  // return Promise
  async chainConfigCoreUpdate({
    txSchedulerTimeout = -1, txSchedulerValidateTimeout = -1,  userInfoList,
  }) {
    const payload = await this.ceateChainConfigCoreUpdatePayload({
      txSchedulerTimeout, txSchedulerValidateTimeout,
    });
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createChainConfigTrustRootAddPayload({ orgId, root }) {
    const params = {
      root,
      org_id: orgId,
    };

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.TRUST_ROOT_ADD),
      params,
    });
  }

  async chainConfigTrustRootAdd({
    orgId, root, userInfoList,
  }) {
    const payload = await this.createChainConfigTrustRootAddPayload({
      orgId, root,
    });
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createChainConfigTrustRootUpdatePayload({ orgId, root }) {
    const params = {
      root,
      org_id: orgId,
    };

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.TRUST_ROOT_UPDATE),
      params,
    });
  }

  async chainConfigTrustRootUpdate({
    orgId, root, userInfoList,
  }) {
    const payload = await this.createChainConfigTrustRootUpdatePayload({
      orgId, root,
    });
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createChainConfigTrustRootDeletePayload({ orgId }) {
    const params = {
      org_id: orgId,
    };

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.TRUST_ROOT_DELETE),
      params,
    });
  }

  async chainConfigTrustRootDelete({ orgId, userInfoList }) {
    const payload = await this.createChainConfigTrustRootDeletePayload({
      orgId,
    });
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  // policyConfig: {rule: "", orgList: [""], roleList: [""]}
  createChainConfigPermissionAddPayload({ permissionResourceName, rule,  orgList = [], roleList = [] }) {
    const policy = new utils.accesscontrol.Policy();
    policy.setRule(rule);
    if (orgList.length) policy.setOrgListList(orgList);
    if (roleList.length) policy.setRoleListList(roleList);
    const params = {};
    params[permissionResourceName] = Buffer(policy.serializeBinary()).toString();

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.PERMISSION_ADD),
      params,
    });
  }

  async chainConfigPermissionAdd({ permissionResourceName, rule,  orgList, roleList, userInfoList }) {
    const payload = await this.createChainConfigPermissionAddPayload({
      permissionResourceName, rule,  orgList, roleList,
    });
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  // policyConfig: {rule: "", orgList: [""], roleList: [""]}
  createChainConfigPermissionUpdatePayload({ permissionResourceName, rule,  orgList, roleList }) {
    const policy = new utils.accesscontrol.Policy();
    policy.setRule(rule);
    if (orgList.length) policy.setOrgListList(orgList);
    if (roleList.length) policy.setRoleListList(roleList);
    const params = {};
    params[permissionResourceName] = Buffer(policy.serializeBinary()).toString();

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.PERMISSION_UPDATE),
      params,
    });
  }

  async chainConfigPermissionUpdate({ permissionResourceName, rule,  orgList, roleList, userInfoList }) {
    const payload = await this.createChainConfigPermissionUpdatePayload({
      permissionResourceName, rule,  orgList, roleList,
    });
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createChainConfigPermissionDeletePayload({ permissionResourceName }) {
    const policy = new utils.accesscontrol.Policy();
    const params = {};
    params[permissionResourceName] =  Buffer(policy.serializeBinary()).toString();

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.PERMISSION_DELETE),
      params,
    });
  }

  async chainConfigPermissionDelete({ permissionResourceName, userInfoList }) {
    const payload = await this.createChainConfigPermissionDeletePayload({
      permissionResourceName,
    });
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  // nodeIds: ['']
  createChainConfigConsensusNodeIdAddPayload(orgId, nodeIds) {
    const params = {
      org_id: orgId,
      node_ids: nodeIds.join(','),
    };

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.NODE_ID_ADD),
      params,
    });
  }

  async chainConfigConsensusNodeIdAdd(orgId, nodeIds, userInfoList) {
    const payload = await this.createChainConfigConsensusNodeIdAddPayload(orgId, nodeIds);
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createChainConfigConsensusNodeIdUpdatePayload(orgId, nodeId, newNodeId) {
    const params = {
      org_id: orgId,
      node_id: nodeId,
      new_node_id: newNodeId,
    };

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.NODE_ID_UPDATE),
      params,
    });
  }

  async chainConfigConsensusNodeIdUpdate(orgId, nodeId, newNodeId, userInfoList) {
    const payload = await this.createChainConfigConsensusNodeIdUpdatePayload(orgId, nodeId, newNodeId);
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createChainConfigConsensusNodeIdDeletePayload(orgId, nodeId) {
    const params = {
      org_id: orgId,
      node_id: nodeId,
    };

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.NODE_ID_DELETE),
      params,
    });
  }

  async chainConfigConsensusNodeIdDelete(orgId, nodeId, userInfoList) {
    const payload = await this.createChainConfigConsensusNodeIdDeletePayload(orgId, nodeId);
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  // nodeIds: ['']
  createChainConfigConsensusNodeOrgAddPayload(orgId, nodeIds) {
    const params = {
      org_id: orgId,
      node_ids: nodeIds.join(','),
    };

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.NODE_ORG_ADD),
      params,
    });
  }

  async chainConfigConsensusNodeOrgAdd(orgId, nodeIds, userInfoList) {
    const payload = await this.createChainConfigConsensusNodeOrgAddPayload(orgId, nodeIds);
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createChainConfigConsensusNodeOrgUpdatePayload(orgId, nodeIds) {
    const params = {
      org_id: orgId,
      node_ids: nodeIds.join(','),
    };

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.NODE_ORG_UPDATE),
      params,
    });
  }

  async chainConfigConsensusNodeOrgUpdate(orgId, nodeIds, userInfoList) {
    const payload = await this.createChainConfigConsensusNodeOrgUpdatePayload(orgId, nodeIds);
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createChainConfigConsensusNodeOrgDeletePayload(orgId) {
    const params = {
      org_id: orgId,
    };

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.NODE_ORG_DELETE),
      params,
    });
  }

  async chainConfigConsensusNodeOrgDelete(orgId, userInfoList) {
    const payload = await this.createChainConfigConsensusNodeOrgDeletePayload(orgId);
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createChainConfigConsensusExtAddPayload(kvs) {
    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.CONSENSUS_EXT_ADD),
      params: kvs,
    });
  }

  async chainConfigConsensusExtAdd(kvs, userInfoList) {
    const payload = await this.createChainConfigConsensusExtAddPayload(kvs);
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  // obj: {} key:src key value: new key
  createChainConfigConsensusExtUpdatePayload(kvs) {
    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.CONSENSUS_EXT_UPDATE),
      params: kvs,
    });
  }

  async chainConfigConsensusExtUpdate(kvs, userInfoList) {
    const payload = await this.createChainConfigConsensusExtUpdatePayload(kvs);
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createChainConfigConsensusExtDeletePayload(keys) {
    const params = {};
    for (let i = 0; i < keys.length; i++) {
      params[keys[i]] = '';
    }

    return this.createSystemContractPayload({
      contractName: utils.enum2str(utils.common.ContractName, utils.common.ContractName.SYSTEM_CONTRACT_CHAIN_CONFIG),
      method: utils.enum2str(utils.common.ConfigFunction, utils.common.ConfigFunction.CONSENSUS_EXT_DELETE),
      params,
    });
  }

  async chainConfigConsensusExtDelete(keys, userInfoList) {
    const payload = await this.createChainConfigConsensusExtDeletePayload(keys);
    const response = this.signAndSendRequest(payload, userInfoList);
    return response;
  }

  createQueryPayload({ contractName, method, params }) {
    const payload = new utils.common.QueryPayload();
    payload.setContractName(contractName);
    payload.setMethod(method);
    Object.keys(params).forEach((key) => {
      const param = new utils.common.KeyValuePair();
      param.setKey(key);
      param.setValue(params[key]);
      payload.addParameters(param);
    });
    // console.log(JSON.stringify(payload.toObject(), 4, null));
    const payloadBytes = payload.serializeBinary();
    return payloadBytes;
  }

  async createSystemContractPayload({ contractName, method, params }) {
    const payload = new utils.common.SystemContractPayload();

    payload.setChainId(this.chainID);
    payload.setContractName(contractName);
    payload.setMethod(method);
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined) {
        const param = new utils.common.KeyValuePair();
        param.setKey(key);
        if (params[key] !== '') param.setValue(params[key]);
        payload.addParameters(param);
      }
    });

    let sequence = await this.getChainConfigSequence();
    sequence = parseInt(sequence, 10) + 1;
    payload.setSequence(sequence);
    return payload;
  }

  signChainConfigPayload(payload, userInfo) {
    return utils.signPayload(
      _.cloneDeep(payload), userInfo.userSignKeyBytes,
      userInfo.userSignCertBytes, userInfo.orgID, this.userInfo.isFullCert,
    );
  }

  mergeChainConfigSignedPayload(signedPayloadBytesArray) {
    let mergedPayload = utils.mergeContractMgmtPayload(signedPayloadBytesArray, utils.common.SystemContractPayload);
    mergedPayload = mergedPayload.serializeBinary();
    return mergedPayload;
  }

  // userInfoList: class orgInfo list
  signSystemContractPayload(payload, userInfoList) {
    const signedPayloadBytesArray = [];
    for (let i = 0; i < userInfoList.length; i++) {
      signedPayloadBytesArray.push(utils.signPayload(
        _.cloneDeep(payload), userInfoList[i].userSignKeyBytes,
        userInfoList[i].userSignCertBytes, userInfoList[i].orgID, this.userInfo.isFullCert,
      ));
    }
    let mergedPayload = utils.mergeContractMgmtPayload(signedPayloadBytesArray, utils.common.SystemContractPayload);
    mergedPayload = mergedPayload.serializeBinary();
    return mergedPayload;
  }

  // return promise
  async sendPayload(payload, srcRes = false) {
    return this.node.sendPayload(this.userInfo, payload, srcRes);
  }

  sendChainConfigUpdateRequest(signPayloadBytes) {
    return this.sendPayload(
      signPayloadBytes,
      utils.common.TxType.UPDATE_CHAIN_CONFIG,
    );
  }

  signAndSendRequest(payload, userInfoList) {
    const signPayloadBytes = this.signSystemContractPayload(payload, userInfoList);
    return this.sendPayload(
      signPayloadBytes,
      utils.common.TxType.UPDATE_CHAIN_CONFIG,
    );
  }
}

module.exports = ChainConfig;
