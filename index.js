const express = require("express");
const stripe = require("stripe")("sk_test_CtsHOqXUxhFmYGSlmQYjHwlj007A8zbQT4");
const bodyParser = require("body-parser");
const handleBars = require("express-handlebars");

const server = express();

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
