#!/usr/bin/env node
var greet = require("greet");
var parseArgv = require("minimist");
console.log(greet(parseArgv(process.argv.slice(2))));
