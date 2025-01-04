const books = require("./books");

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
      console.log(newBook);
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "u9kgwNWGi3uUUwh0b8V49" });
invokeAction({ action: "add", title: "Worm", author: "John C. McCrae" });
