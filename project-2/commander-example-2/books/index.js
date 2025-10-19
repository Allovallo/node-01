const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const bookPath = path.join(__dirname, "books.json");

const getAll = async () => {
  const data = await fs.readFile(bookPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const books = await getAll();
  const result = books.find((i) => i.id === id);
  return result || null;
};

const add = async (data) => {
  const books = await getAll();

  const newBook = {
    id: nanoid(),
    ...data,
  };

  books.push(newBook);
  await fs.writeFile(bookPath, JSON.stringify(books, null, 2));
  return newBook;
};

const updateById = async (id, data) => {
  const books = await getAll();

  const index = books.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  books[index] = { id, ...data };
  await fs.writeFile(bookPath, JSON.stringify(books, null, 2));
  return books[index];
};

const deleteById = async (id) => {
  const books = await getAll();

  const index = books.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  const [result] = books.splice(index, 1);
  await fs.writeFile(bookPath, JSON.stringify(books, null, 2));
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
