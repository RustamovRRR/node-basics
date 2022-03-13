const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "not-found.html"));
});

app.listen(3000);
