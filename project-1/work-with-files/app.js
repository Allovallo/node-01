const fs = require("fs/promises");

// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

const readFile = async () => {
  const data = await fs.readFile("./files/file.txt");
  console.log(data);
};

readFile();
