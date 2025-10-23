const express = require("express");

const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
  // res.send(books);
  res.json(books);
});

app.listen(3000);
