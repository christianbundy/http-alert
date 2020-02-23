const http = require("http");
const open = require("open");

module.exports = ({ message, readStream } = {}) => {
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
      if (message != null) {
        res.write(message);
      }
      if (readStream != null) {
        readStream.on("data", data => {
          res.write(data);
        });
        readStream.on("end", () => {
          res.end();
          close();
        });
      } else {
        res.end(close);
      }
    })
    .listen(options, () => {
      const port = server.address().port;
      open(`http://${options.host}:${port}/`);
    })
    .on("error", err => {
      if (done === false) {
        throw err;
      }
    });

  const close = () => {
    done = true;
    server.close();
  };
};
