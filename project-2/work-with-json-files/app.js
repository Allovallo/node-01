const books = require("./books");

// console.log(books)
const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
  }
};

invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "u9kgwNWGi3uUUwh0b8V49" });
