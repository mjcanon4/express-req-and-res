//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/contacts", function (req, res) {
  res.send("Contact me @ 123456789");
});

app.get("/about", function (req, res) {
  res.send("I like to use express");
});

app.listen(3001, function () {
  console.log("Server started on Port 3001");
});
