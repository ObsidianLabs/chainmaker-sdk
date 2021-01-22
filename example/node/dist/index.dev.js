"use strict";

var chainMaker = require('../../dist/chainMaker-js-sdk');

console.log(chainMaker, 33);
var bb = new chainMaker('789');
console.log(bb.getUrl());