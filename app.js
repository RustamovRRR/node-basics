// importing http module
const http = require("http");
const express = require("express");

const app = express();

// create server
const server = http.createServer(app);

server.listen(3000);
