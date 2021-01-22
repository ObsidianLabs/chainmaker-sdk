"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function Instance(url) {
  this.url = url;
}

Instance.prototype.getUrl = function () {
  var url = this.url;
  return url;
};

var chainMaker = function chainMaker(string) {
  var created = new Instance(string);
  return created;
};

var _default = chainMaker;
exports["default"] = _default;