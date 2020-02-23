#!/usr/bin/env node

const httpAlert = require("../src");

// If last argument is `-`, read from stdin.

const hasOneArgument = process.argv.length === 3;
const firstArgument = process.argv[2];
const hasStreamArg = firstArgument === "-";
if (hasOneArgument && hasStreamArg) {
  httpAlert(process.stdin);
} else {
  httpAlert(process.argv.slice(2).join(" "));
}
