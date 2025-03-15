const express = require("express");

const contacts = require("../../models/");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await contacts.getAll();
    res.json(result);
  } catch (error) {
    console.log("Lil Error!");
  }
});

module.exports = router;
