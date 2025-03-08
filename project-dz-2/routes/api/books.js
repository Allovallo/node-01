const express = require("express");

const books = require("../../models/books");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await books.getAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "SERVER ERRORR!!!" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await books.getById(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "SERVER ERRORR!!!" });
  }
});

module.exports = router;
