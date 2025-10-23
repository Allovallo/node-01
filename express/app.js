const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ...");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/contact", (req, res) => {
  res.send("<h>Contact page</h>");
});

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Парметр: ${req.params.id}`);
});
