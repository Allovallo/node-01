const express = require("express");

const contacts = require("../../models/contacts.json");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
