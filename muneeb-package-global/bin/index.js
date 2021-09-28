#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var greet_1 = require("../lib/greet");
var greeting = greet_1.greet();
console.log(greeting);
var s = process.argv.splice(2);
console.log(s);
