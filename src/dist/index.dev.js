"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _block = _interopRequireDefault(require("./api/block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Instance =
/*#__PURE__*/
function () {
  function Instance(url) {
    _classCallCheck(this, Instance);

    this.url = url;
  }

  _createClass(Instance, [{
    key: "getsdk",
    value: function getsdk(data) {
      return _block["default"].getsdk(this.url, data);
    }
  }]);

  return Instance;
}();

var chainMaker = function chainMaker(url) {
  var created = new Instance(url);
  return created;
};

var _default = chainMaker;
exports["default"] = _default;