const express = require("express");
const router = express.Router();

const { nanoid } = require("nanoid");

let tasks = [
  {
    id: nanoid(),
    title: "Work",
    text: "Do it!",
    done: false,
  },
];

router.get("/tasks", (req, res, next) => {
  res.json({ status: "success", code: 200, data: { tasks } });
});
