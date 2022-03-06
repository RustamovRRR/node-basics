// importing http module
const http = require("http");

// create server
const server = http.createServer((req, res) => {
  console.log(req);
  //   process.exit();
});

server.listen(3000);
