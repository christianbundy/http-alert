#!/usr/bin/env node

const httpAlert = require("../src");

// If last argument is `-`, read from stdin.
const lastArgument = process.argv[process.argv.length - 1];
const hasStreamArg = lastArgument === "-";
const readStream = hasStreamArg ? process.stdin : undefined;

if (hasStreamArg) {
  // Remove `-` before it's passed `httpAlert()`.
  process.argv.pop();
}

const message = process.argv.slice(2).join(" ");

httpAlert({ message, readStream });
