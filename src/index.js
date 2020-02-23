const http = require("http");
const open = require("open");

module.exports = input =>
  new Promise((resolve, reject) => {
    const options = {
      host: "localhost", // No remote connections.
      port: 0 // Use any open port available.
    };

    let started = false;
    let done = false;

    const server = http
      .createServer((req, res) => {
        if (started === true) {
          return res.end();
        } else {
          started = true;
        }
        if (typeof input.on === "function") {
          input.on("data", data => {
            res.write(data);
          });
          input.on("end", () => {
            res.end();
            close();
          });
        } else {
          res.write(input);
          res.end(close);
        }
      })
      .listen(options, () => {
        const address = server.address();
        if (typeof address === "string") {
          throw new Error("address() should return an object");
        }
        const port = address.port;
        open(`http://${options.host}:${port}/`);
      })
      .on("error", err => {
        if (done === false) {
          reject(err);
        }
      });

    const close = () => {
      done = true;
      server.close();
      resolve();
    };
  });
