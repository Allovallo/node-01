import users from "./users.mjs";
import {getCurrentMonth} from "./date/index.mjs"

const currentMonth = getCurrentMonth()

console.log(users);
console.log(`Now is ${currentMonth} month`);