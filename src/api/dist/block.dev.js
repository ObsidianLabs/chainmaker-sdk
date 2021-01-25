"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = require("./request");

var block = {
  getsdk: function getsdk(baseUrl, data) {
    return (0, _request.post)("".concat(baseUrl, "/api/v1/org/list"), data);
  }
}; // const block = function (baseUrl) {
//   return {
//     getsdk: function (data) {
//       return post(`${baseUrl}/api/v1/org/list`, data)
//     }
//   }
// }

var _default = block;
exports["default"] = _default;