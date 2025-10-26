const express = require("express");
const books = require("../../models/books");
const { HttpError } = require("../../helpers");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.json(result);
  } catch (error) {
    // res.status(500).json({ message: "Server ERRORR" });
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.getById(id);

    if (!result) {
      throw HttpError(404, "Not found!");
      //   const error = new Error("Not found!");
      //   error.status = 404;
      //   throw error;

      //   return res.status(404).json({ message: "Not found" });
    }

    res.json(result);
  } catch (error) {
    // const { status = 500, message = "Server ERRORR" } = error;
    // res.status(status).json({ message: message });
    next(error);
  }
});

module.exports = router;
