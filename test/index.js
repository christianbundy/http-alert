const httpAlert = require("../src");
const fs = require("fs");

httpAlert({
  message: "hello world"
});

httpAlert({
  readStream: fs.createReadStream(__filename)
});
