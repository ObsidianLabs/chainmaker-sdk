# ChainMaker Js SDK 接口说明
## 1 用户合约接口
### 1.1 创建合约待签名payload生成
**类名**
  - userContructMgr

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - contractName: 合约名(string)
  - contractVersion: 版本号(string)
  - runtimeType: 合约运行环境(number)
  - contractFilePath: 合约二进制文件路径(string)
  - params: 合约初始化参数，(k-v Object对象)
```node
	createContractCreatePayload({ contractName, contractVersion, runtimeType, contractFilePath, params })
```

### 1.2 升级合约待签名payload生成
**类名**
  - userContructMgr

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - contractName: 合约名(string)
  - contractVersion: 版本号(string)
  - runtimeType: 合约运行环境(number)
  - contractFilePath: 合约二进制文件路径(string)
  - params: 合约升级参数，(k-v Object对象)
```node
	createContractUpgradePayload({ contractName, contractVersion, runtimeType, contractFilePath, params })
```

### 1.3 冻结合约payload生成
**类名**
  - userContructMgr

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - contractName: 合约名(string)
```node
	createContractFreezePayload({ contractName })
```

### 1.4 解冻合约payload生成
**类名**
  - userContructMgr

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - contractName: 合约名(string)
```node
	createContractUnfreezePayload({ contractName })
```

### 1.5 吊销合约payload生成
**类名**
  - userContructMgr

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - contractName: 合约名(string)
```node
	createContractRevokePayload({ contractName })
```

### 1.6 合约管理获取Payload签名
**类名**
  - userContructMgr

**参数说明**
  - payload: 待签名payload
  - userInfoList: 需要签名的用户列表（array[class UserInfo]）
```node
	signContractManagePayload(payload, userInfoList)
```

### 1.7 合约管理Payload签名收集&合并
**类名**
  - userContructMgr

**参数说明**
  - signedPayloadBytesArray: 已签名payload列表(array[payloadBytes])
```node
	mergeContractManageSignedPayload(signedPayloadBytesArray)
```

### 1.8 发送合约管理请求（创建、更新、冻结、解冻、吊销）
**类名**
  - userContructMgr

**参数说明**
  - mergedPayload: 多签结果
```node
	async sendContractManageRequest(mergedPayload)
```

### 1.9 合约调用
**类名**
  - callUserContruct

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - contractName: 合约名称(string)
  - method: 合约方法(string)
  - params: 合约参数(k-v Object对象)
```node
	async invokeUserContract({ contractName, method, params })
```

### 1.10 合约查询接口调用
**类名**
  - callUserContruct

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - contractName: 合约名称(string)
  - method: 合约方法(string)
  - params: 合约参数(k-v Object对象)
```node
	async queryContract({ contractName, method, params })
```

### 1.11 构造待发送交易体
**类名**
  - callUserContruct

**参数说明**
  - contractName: 合约名称(string)
  - method: 合约方法(string)
  - params: 合约参数(k-v Object对象)
```node
	getTxRequest(contractName, method, params)
```

### 1.12 发送已构造好的交易体
**类名**
  - callUserContruct

**参数说明**
  - request: 已构造好的交易体
  - txId: getTxRequest方法的返回值
```node
	async sendTxRequest(request, txId)
```

## 2 系统合约接口
### 2.1 根据交易Id查询交易
**类名**
  - callSystemContruct

**参数说明**
  - txId: 交易ID(string)
```node
  async getTxByTxId(txId)
```

### 2.2 根据区块高度查询区块
**类名**
  - callSystemContruct

**参数说明**
  - blockHeight: 区块高度,若为-1，将返回最新区块(number)
  - withRWSet: 是否返回读写集(boolean)
```node
  async getBlockByHeight(blockHeight, withRWSet)
```

### 2.3 根据区块哈希查询区块
**类名**
  - callSystemContruct

**参数说明**
  - blockHash: 区块哈希(string)
  - withRWSet: 是否返回读写集(boolean)
```node
  async getBlockByHash(blockHash, withRWSet)
```

### 2.4 根据交易Id查询区块
**类名**
  - callSystemContruct

**参数说明**
  - txId: 交易ID(string)
  - withRWSet: 是否返回读写集(boolean)
```node
  async getBlockByTxId(txId, withRWSet)
```

### 2.5 查询最新的配置块
**类名**
  - callSystemContruct

**参数说明**
  - withRWSet: 是否返回读写集(boolean)
```node
  async getLastConfigBlock(withRWSet)
```

### 2.6 查询节点加入的链信息
**类名**
  - callSystemContruct

**参数说明**
  - nodeAddr: 节点地址,如127.0.0.1(string)
```node
  async getNodeChainList(nodeAddr)
```

### 2.7 查询链信息
**类名**
  - callSystemContruct

**参数说明**
  - 包括：当前链最新高度，链节点信息
```node
  async getChainInfo()
```

### 2.8 根据交易Id获取区块高度
**类名**
  - callSystemContruct

**参数说明**
  - txId: 交易ID(string)
```node
  async getBlockHeightByTxId(txId)
```

### 2.9 根据区块Hash获取区块高度
**类名**
  - callSystemContruct

**参数说明**
  - blockHash: 区块哈希(string)
```node
  async getBlockHeightByHash(blockHash)
```

### 2.10 查询当前最新区块高度
**类名**
  - callSystemContruct

**参数说明**
  - 返回当前最新区块高度
```node
  async getCurrentBlockHeight()
```

### 2.11 根据区块高度查询区块头
**类名**
  - callSystemContruct

**参数说明**
  - blockHeight: 区块高度(number)
```node
  async getBlockHeaderByHeight(blockHeight)
```

### 2.12 查询最新区块
**类名**
  - callSystemContruct

**参数说明**
  - withRWSet: 是否返回读写集(boolean)
```node
  async getLastBlock(withRWSet)
```

### 2.13 根据区块高度查询完整区块
**类名**
  - callSystemContruct

**参数说明**
  - blockHeight: 区块高度(number)
```node
  async getFullBlockByHeight(blockHeight)
```

## 3 链配置接口
### 3.1 查询最新链配置
**类名**
  - chainConfig

```node
  async getChainConfig()
```

### 3.2 根据指定区块高度查询最近链配置
**类名**
  - chainConfig

**参数说明**
  - blockHeight: 区块高度(number)
```node
  async getChainConfigByBlockHeight(blockHeight)
```

### 3.3 查询最新链配置序号Sequence
**类名**
  - chainConfig

```node
  async getChainConfigSequence()
```

### 3.4 链配置更新获取Payload签名
**类名**
  - chainConfig

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - payload: 待签名payload
  - userInfo: 需要签名的用户（class UserInfo）
```node
  signChainConfigPayload(payload, userInfo)
```

### 3.5 链配置更新Payload签名收集&合并
**类名**
  - chainConfig

**参数说明**
  - signedPayloadBytesArray: 签名之后的payload bytes数组(Array[payloadBytes])
```node
  mergeChainConfigSignedPayload(signedPayloadBytesArray)
```

### 3.6 发送链配置更新请求
**类名**
  - chainConfig

**参数说明**
  - signPayloadBytes: 签名之后的payload bytes
```node
  async sendChainConfigUpdateRequest(signPayloadBytes)
```

### 3.7 更新Block模块待签名payload生成
**类名**
  - chainConfig

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - txTimestampVerify: 是否需要开启交易时间戳校验(boolean)
  - (以下参数，若无需修改，请置为-1)
  - txTimeout: 交易时间戳的过期时间(秒)，其值范围为[600, +∞)(number)
  - blockTxCapacity: 区块中最大交易数，其值范围为(0, +∞](number)
  - blockSize: 区块最大限制，单位MB，其值范围为(0, +∞](number)
  - blockInterval: 出块间隔，单位:ms，其值范围为[10, +∞](number)
```node
  async createChainConfigBlockUpdatePayload({txTimestampVerify, txTimeout = -1, blockTxCapacity = -1, blockSize = -1, blockInterval = -1, userInfoList})
```

### 3.8 更新Core模块待签名payload生成
**类名**
  - chainConfig

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - txSchedulerTimeout: 交易调度器从交易池拿到交易后, 进行调度的时间，其值范围为[0, 60]，若无需修改，请置为-1(number)
  - txSchedulerValidateTimeout: 交易调度器从区块中拿到交易后, 进行验证的超时时间，其值范围为[0, 60]，若无需修改，请置为-1(number)
```node
  async ceateChainConfigCoreUpdatePayload({txSchedulerTimeout = -1, txSchedulerValidateTimeout = -1,  userInfoList,})
```

### 3.9 添加信任组织根证书待签名payload生成
**类名**
  - chainConfig

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - orgId: 组织Id(string)
  - root: 根证书(string)
```node
  async createChainConfigTrustRootAddPayload({ orgId, root })
```

### 3.10 更新信任组织根证书待签名payload生成
**类名**
  - chainConfig

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - orgId: 组织Id(string)
  - root: 根证书(string)
```node
  async createChainConfigTrustRootUpdatePayload({ orgId, root })
```

### 3.11 删除信任组织根证书待签名payload生成
**类名**
  - chainConfig

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - orgId: 组织Id(string)
```node
  async createChainConfigTrustRootDeletePayload({ orgId })
```

### 3.12 添加权限配置待签名payload生成
**类名**
  - chainConfig

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - permissionResourceName: 权限名(string)
  - rule: 权限内容(string)
  - orgList: 组织列表(Array[string])
  - roleList: 权限列表(Array[string])
```node
  async createChainConfigPermissionAddPayload({ permissionResourceName, rule,  orgList = [], roleList = [] })
```

### 3.13 更新权限配置待签名payload生成
**类名**
  - chainConfig

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - permissionResourceName: 权限名(string)
  - rule: 权限内容(string)
  - orgList: 组织列表(Array[string])
  - roleList: 权限列表(Array[string])
```node
  async createChainConfigPermissionUpdatePayload({ permissionResourceName, rule,  orgList, roleList })
```

### 3.14 删除权限配置待签名payload生成
**类名**
  - chainConfig

**参数说明**

  &nbsp;&nbsp;&nbsp;&nbsp;类型：k-v Object对象
  - permissionResourceName: 权限名(string)
```node
  async createChainConfigPermissionDeletePayload({ permissionResourceName })
```

### 3.15 添加共识节点地址待签名payload生成
**类名**
  - chainConfig

**参数说明**
  - orgId: 节点组织Id(string)
  - nodeIds: 节点Id数组(Array[string])
```node
  async createChainConfigConsensusNodeIdAddPayload(orgId, nodeIds)
```

### 3.16 更新共识节点地址待签名payload生成
**类名**
  - chainConfig

**参数说明**
  - orgId: 节点组织Id(string)
  - nodeId: 旧节点Id(string)
  - newNodeId: 新节点Id(string)
```node
  async createChainConfigConsensusNodeIdUpdatePayload(orgId, nodeId, newNodeId)
```

### 3.17 删除共识节点地址待签名payload生成
**类名**
  - chainConfig

**参数说明**
  - orgId: 节点组织Id(string)
  - nodeId: 节点Id(string)
```node
  async createChainConfigConsensusNodeIdDeletePayload(orgId, nodeId)
```

### 3.18 添加共识节点待签名payload生成
**类名**
  - chainConfig

**参数说明**
  - orgId: 节点组织Id(string)
  - nodeIds: 节点Id数组(Array[string])
```node
  async createChainConfigConsensusNodeOrgAddPayload(orgId, nodeIds)
```

### 3.19 更新共识节点待签名payload生成
**类名**
  - chainConfig

**参数说明**
  - orgId: 节点组织Id(string)
  - nodeIds: 节点Id数组(Array[string])
```node
  async createChainConfigConsensusNodeOrgUpdatePayload(orgId, nodeIds)
```

### 3.20 删除共识节点待签名payload生成
**类名**
  - chainConfig

**参数说明**
  - orgId: 节点组织Id(string)
```node
  async createChainConfigConsensusNodeOrgDeletePayload(orgId)
```

### 3.21 添加共识扩展字段待签名payload生成
**类名**
  - chainConfig

**参数说明**
  - kvs: 字段key、value对(k-v Object对象)
```node
  async createChainConfigConsensusExtAddPayload(kvs)
```

### 3.22 添加共识扩展字段待签名payload生成
**类名**
  - chainConfig

**参数说明**
  - kvs: 字段key、value对(k-v Object对象)
```node
  async createChainConfigConsensusExtUpdatePayload(kvs)
```

### 3.23 添加共识扩展字段待签名payload生成
**类名**
  - chainConfig

**参数说明**
  - keys: 字段key数组(Array[string])
```node
  async createChainConfigConsensusExtDeletePayload(keys)
```

## 4 证书管理接口
### 4.1 用户证书添加
**类名**
  - certMgr

**参数说明**
  - 在response.ContractResult.Result字段中返回成功添加的certHash
```node
  async addCert()
```

### 4.2 用户证书删除
**类名**
  - certMgr

**参数说明**
  - certHashes: 证书Hash列表(Array[string])
```node
  async deleteCert(certHashes)
```

### 4.3 用户证书查询
**类名**
  - certMgr

**参数说明**
  - certHashes: 证书Hash列表(Array[string])
```node
  async queryCert(certHashes)
```

### 4.4 获取用户证书哈希
**类名**
  - certMgr

**参数说明**
```node
  async getCertHash()
```

### 4.5 生成证书管理操作Payload（三合一接口）
**类名**
  - certMgr

**参数说明**
  - method: CERTS_FROZEN(证书冻结)/CERTS_UNFROZEN(证书解冻)/CERTS_REVOCATION(证书吊销)
  - params: 证书管理操作参数
```node
  async createCertManagePayload(method, params)
```

### 4.6 生成证书冻结操作Payload
**类名**
  - certMgr

**参数说明**
  - certs: 证书列表(Array[string])
```node
  async createCertManageFrozenPayload(certs)
```

### 4.7 生成证书解冻操作Payload
**类名**
  - certMgr

**参数说明**
  - certs: 证书列表(Array[string])
```node
  async createCertManageUnfrozenPayload(certs)
```

### 4.8 生成证书吊销操作Payload
**类名**
  - certMgr

**参数说明**
  - certCrl: 吊销证书的crl(string)
```node
  async createCertManageRevocationPayload(certCrl)
```

### 4.9 待签payload签名
**类名**
  - certMgr

**参数说明**
  - payload: 待签名payload
```node
  signCertManagePayload(payload)
```

### 4.10 证书管理Payload签名收集&合并
**类名**
  - certMgr

**参数说明**
  - signedPayloadBytesArray: 签名之后的payload bytes数组(Array[payloadBytes])
```node
  mergeCertManageSignedPayload(signedPayloadBytesArray)
```

### 4.11 发送证书管理请求（证书冻结、解冻、吊销）
**类名**
  - certMgr

**参数说明**
  - payloadBytes: 签名之后的payload bytes
```node
  async sendCertManageRequest(payloadBytes)
```

## 5 消息订阅接口
### 5.1 区块订阅
**类名**
  - subscribe

**参数说明**
  - startBlock: 订阅起始区块高度，若为-1，表示订阅实时最新区块(number)
  - endBlock: 订阅结束区块高度，若为-1，表示订阅实时最新区块(number)
  - withRwSet: 是否返回读写集(boolean)
  - callBack: 回调函数，第一个参数是监听到的的block区块，第二个参数是错误信息
```node
  subscribeBlock(startBlock, endBlock, withRwSet, callBack)
```

### 5.2 交易订阅
**类名**
  - subscribe

**参数说明**
  - startBlock: 订阅起始区块高度，若为-1，表示订阅实时最新区块(number)
  - endBlock: 订阅结束区块高度，若为-1，表示订阅实时最新区块(number)
  - txType: 订阅交易类型,若为common.TxType(-1)，表示订阅所有交易类型(number)
  - txIds: 订阅txId列表，若为空(null)，表示订阅所有txId(Array[string])
  - callBack: 回调函数，第一个参数是监听到的交易，第二个参数是错误信息
```node
  subscribeTx(startBlock, endBlock, txType, txIds, callBack)
```

### 5.3 合约事件订阅
**类名**
  - subscribe

**参数说明**
  - topic: 订阅的主题(string)
  - contractName: 智能合约名称(string)
  - callBack: 回调函数，第一个参数是监听到的合约事件，第二个参数是错误信息
```node
  subscribeContractEvent(topic, contractName, callBack)
```

### 5.4 多合一订阅
**类名**
  - subscribe

**参数说明**
  - txType: 订阅交易类型，目前已支持：区块消息订阅(common.TxType_SUBSCRIBE_BLOCK_INFO)、交易消息订阅(common.TxType_SUBSCRIBE_TX_INFO)、合约事件订阅(common.TxType.CONTRACT_EVENT_INFO)
  - payloadBytes: 消息订阅参数payload
  - callBack: 回调函数，第一个参数是监听到的事件返回，第二个参数是错误信息
```node
  subscribe(payloadBytes, txType, callBack)
```

## 6 证书压缩
*开启证书压缩可以减小交易包大小，提升处理性能*
### 6.1 启用压缩证书功能
**类名**
  - certCompression

**参数说明**
```node
  async enableCertHash()
```

### 6.2 停用压缩证书功能
**类名**
  - certCompression

**参数说明**
```node
  async disableCertHash()
```

## 7 工具类
### 7.1 将EasyCodec编码解码成map
**类名**
  - easyCodec

```node
	easyCodecItemToParamsMap(easyCodecObj)
```

## 8 数据归档
### 8.1 获取已归档区块高度
**类名**
  - callSystemContruct

**参数说明**
```node
  async getArchivedBlockHeight()
```

### 8.2 构造数据归档区块Payload
**类名**
  - archive

**参数说明**
  - targetBlockHeight: 目标区块高度(number)
```node
  createArchiveBlockPayload(targetBlockHeight)
```

### 8.3 构造归档归档数据恢复Payload
**类名**
  - archive

**参数说明**
  - fullBlock: 完整区块的bytes
```node
  createRestoreBlockPayload(fullBlock)
```

### 8.4 获取归档操作Payload签名
**类名**
  - archive

**参数说明**
  - payloadBytes: 待签名payloadBytes
```node
  signArchivePayload(payloadBytes)
```

### 8.5 发送归档请求
**类名**
  - archive

**参数说明**
  - mergeSignedPayloadBytes: 签名之后的payloadBytes
```node
  async sendArchiveBlockRequest(mergeSignedPayloadBytes)
```

### 8.6 归档数据恢复
**类名**
  - archive

**参数说明**
  - fullBlock: 完整区块的bytes
```node
  async restoreBlock(fullBlock)
```

### 8.7 根据交易Id查询已归档交易
**类名**
  - archive

**参数说明**
  - txId: 交易Id(string)
```node
  async getArchivedTxByTxId(txId)
```

### 8.8 根据区块高度查询已归档区块
**类名**
  - archive

**参数说明**
  - blockHeight: 区块高度(number)
  - withRWSet: 是否返回读写集(boolean)
```node
  async getArchivedBlockByHeight(blockHeight, withRWSet)
```

### 8.9 根据区块高度查询已归档完整区块(包含：区块数据、读写集、合约事件日志)
**类名**
  - archive

**参数说明**
  - blockHeight: 区块高度(number)
```node
  async getArchivedFullBlockByHeight(blockHeight)
```

### 8.10 根据区块哈希查询已归档区块
**类名**
  - archive

**参数说明**
  - hash: 区块哈希(string)
  - withRWSet: 是否返回读写集(boolean)
```node
  async getArchivedBlockByHash(hash, withRWSet)
```

### 8.11 根据交易Id查询已归档区块
**类名**
  - archive

**参数说明**
  - txId: 交易Id(string)
  - withRWSet: 是否返回读写集(boolean)
```node
  async getArchivedBlockByTxId(txId, withRWSet)
```

## 9 系统类接口
### 9.1 SDK停止接口
*关闭连接池连接，释放资源*
```node
	stop()
```

### 10.2 获取链版本
```go
	GetChainMakerServerVersion() (string, error)
```
