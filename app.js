const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");
const rootDir = require("./util/path");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found" });
  // res.sendFile(path.join(rootDir, "views", "not-found.html"));
});

app.listen(3000);
