const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});
app.use((req, res, next) => {
  console.log("second middleware");
  res.send(`<h1>Hello from Express</h1>`);
});

app.listen(3000);
