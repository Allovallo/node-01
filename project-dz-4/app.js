const books = require("./models/books");

// console.log(books);

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      console.log(deleteBook);
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "u9kgwNWGi3uUUwh0b8V49" });
invokeAction({ action: "add", title: "X", author: "Y" });
// invokeAction({
//   action: "updateById",
//   id: "6dvs6ixlcetBAXzMqyT1Q",
//   title: "XXX",
//   author: "YYY",
// });
// invokeAction({ action: "deleteById", id: "6dvs6ixlcetBAXzMqyT1Q" });
