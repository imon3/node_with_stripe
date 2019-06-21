const express = require("express");
const stripe = require("stripe")("sk_test_CtsHOqXUxhFmYGSlmQYjHwlj007A8zbQT4");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();

// HandleBars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
