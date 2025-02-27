const express = require("express");
const cors = require("cors");

const books = rquire("./books");

const app = express();

app.use(cors());

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("api/books/:id", (req, res) => {
  res.json(books[0]);
});

app.post("/api/books", (req, res) => {
  res.json(books[0]);
});

app.put("/api/books/:id", (req, res) => {
  res.json(books[0]);
});

app.delete("/api/books/:id", (req, res) => {
  res.json(books[0]);
});

app.listen(3000);
