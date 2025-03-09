const express = require("express");

const books = require("../../models/books");

const { HttpError } = require("../../helpers");

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

    if (!result) {
      // throw HttpError(404, "NOT FOUND(");

      const error = new Error("NOT FOUND");
      error.status = 404;
      throw error;

      // return res.status(404).json({ message: "Not found!!!" });
    }

    res.json(result);
  } catch (error) {
    const { status = 500, message = "SERVER ERRORR!!!" } = error;
    res.status(status).json({ message: message });
  }
});

module.exports = router;
