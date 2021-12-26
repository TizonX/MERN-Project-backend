const express = require("express");
const cors = require("cors");
require("./db/config");
const app = express();
app.use(express.json());
app.use(cors());
const User = require("./db/User");
app.post("/Register", async (req, res) => {
  let user = new User(req.body);
  let result  = await user.save();
  res.send(req.body);
});

app.listen(5000);
