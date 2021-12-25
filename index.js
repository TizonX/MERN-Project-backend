const express = require("express");
require("./db/config");
const app = express();
app.get("/", (req, res) => {
  res.send("app is working...");
});

app.listen(5000);
