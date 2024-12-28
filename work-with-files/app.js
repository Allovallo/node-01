const fs = require("fs/promises");

const fileOperation = async () => {
  const data = await fs.readFile("./files/file.txt");
  console.log(data);
};

fileOperation();

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// const fs = require("fs");

// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });
