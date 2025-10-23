const http = require("http");
// request - объект, описывающий весь запрос
// response - объект, описывающий весь ответ

const server = http.createServer((request, response) => {
  const { url } = request;
  if (url === "/") {
    response.write("<h1>Home page</h1>");
  } else if (url === "/contacts") {
    response.write("<h1>Contacts page</h1>");
  } else {
    response.write("<h1>Not found(</h1>");
  }
  response.end();
});

// const server = http.createServer((request, response)=>{
//     // console.log(request.url);
//     // console.log(request.headers["user-agent"]);
//     // console.log(request.method);

//     response.write("<h2>Добро пожаловать на наш сайт!</h2>");
//     response.end();
// });

server.listen(3000, () => {
  console.log("Сервер запущен!");
});
