const fs = require("fs/promises");
const path = require("path");

const booksPath = path.join(__dirname, "books.json");
// console.log(booksPath);

const getAll = async () => {
  const data = await fs.readFile(booksPath, "utf-8");
  return JSON.parse(data);
};

module.exports = {
  getAll,
};
