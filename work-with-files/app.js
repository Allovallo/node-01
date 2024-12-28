const fs = require("fs/promises");
// const fs = require("fs").promises

// const replaceText = async () => {
//   const result = await fs.writeFile("./files/file.txt", "Гегель");
//   console.log(result);
// };

// replaceText();

const addText = async () => {
  const result = await fs.appendFile("./files/file.txt", "./files/file1.txt");
  console.log(result);
};

addText();

/*
const readFile = async () => {
  const text = await fs.readFile("./files/file.txt", "utf-8");
  //   const buffer = await fs.readFile("./files/file.txt");
  //   console.log(buffer);
  //   const text = buffer.toString();
  console.log(text);
};

readFile();
*/
// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// const fs = require("fs");

// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });
