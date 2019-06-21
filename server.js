const express = require("express");
const stripe = require("stripe")("sk_test_CtsHOqXUxhFmYGSlmQYjHwlj007A8zbQT4");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const server = express();

// HandleBars Middleware
server.engine("handlebars", exphbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

// Body Parser Middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
server.use(express.static(`${__dirname}/public`));

// Home Route
server.get("/", (req, res) => {
  res.render("home");
});

module.exports = server;
