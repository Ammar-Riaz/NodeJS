const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("successfully logged in");
});
app.get("/signup", (req, res) => {
  res.send("Sign up page");
});
app.get("/user", (req, res) => {
  res.send("Logged in user");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
