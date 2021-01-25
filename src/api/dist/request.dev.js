"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.get = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//创建axios实例
var instance = _axios["default"].create({
  baseURL: '',
  withCredentials: true
}); //设置post请求头


instance.defaults.headers.post['Content-Type'] = 'application/json'; //请求拦截器，每次请求如果token存在则在请求头中携带token

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.error(error);
}); //响应拦截器

instance.interceptors.response.use(function (res) {
  return Promise.resolve(res.data);
}, function (error) {
  return Promise.reject(error);
});
/* 统一封装get请求 */

var get = function get(url, params) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise(function (resolve, reject) {
    instance(_objectSpread({
      method: 'get',
      url: url,
      params: params
    }, config)).then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
};
/* 统一封装post请求  */


exports.get = get;

var post = function post(url, data) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise(function (resolve, reject) {
    instance(_objectSpread({
      method: 'post',
      url: url,
      data: data
    }, config)).then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
};

exports.post = post;