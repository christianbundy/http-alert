const http = require("http");
const open = require("open");

module.exports = ({ message = "" } = {}) => {
  const options = {
    host: "localhost", // No remote connections.
    port: 0 // Use any open port available.
  };

  let done = false;

  const server = http
    .createServer((req, res) => {
      res.write(message);
      res.end(() => {
        done = true;
        server.close();
      });
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
};
