// importing http module
const http = require("http");

// create server
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My Node Page</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Node Page</title></head>");
  res.write("<body><h1>Hello from Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
