const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>First Practice</title></head>");
    res.write(
      '<body><h1>First Practice</h1><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">click</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>First Practice</title></head>");
    res.write(
      '<body><h1>First Practice</h1><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">click</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      fs.writeFile("./practice/data.txt", message, (err) => {
        // res.writeHead(302,{})
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
});

server.listen(3000);
