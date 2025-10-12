// CommonJS
// const nodemon = require("nodemon");

// const users = require("./users");
// console.log(users)

// const { admins } = require("./users");
// console.log(admins)

// const { clients } = require("./users");
// console.log(clients);

// const { getCurrentMonth, getCurrentMonth } = require("./date");
// const currentMonth = getCurrentMonth();
// console.log(`Now is ${currentMonth} month`);

const currentMonth = require("./date").getCurrentMonth();
console.log(`Now is ${currentMonth} month`);