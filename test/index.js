const httpAlert = require("../src");
const fs = require("fs");

console.log("This should open two browser tabs with the contents:");
console.log('  - "hello world" without the quotes');
console.log("  - the exact contents of this file (test/index.js)");

httpAlert("hello world").then(() => {
  httpAlert(fs.createReadStream(__filename));
});
