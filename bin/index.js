#!/usr/bin/env node

const httpAlert = require('../src')
const message = process.argv.slice(2).join(' ')
httpAlert({ message })
