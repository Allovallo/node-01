// const fs = require("fs/promises");
const fs = require("fs").promises;


// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

/*
const readFile = async () => {
  // const buffer = await fs.readFile("./files/file.txt");
  // const text = buffer.toString();
  // console.log(text);

  const text = await fs.readFile("./files/file.txt", "utf-8");
  console.log(text)
};

readFile();
*/

/*
const addText = async () => {
  const result = await fs.appendFile("./files/file.txt", "\nШмегель");
  console.log(result)
}

addText();
*/

const replaceText = async () => {
  const result = await fs.writeFile("./files/file.txt", "Gogol");
  console.log(result)
}

replaceText();