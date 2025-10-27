const express = require("express");
const Joi = require("joi");

const books = require("../../models/books");
const { HttpError } = require("../../helpers");

const router = express.Router();

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

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

router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await books.add(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
