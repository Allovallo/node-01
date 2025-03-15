const express = require("express");
const Joi = require("joi");

const contacts = require("../../models/");
const { HttpError } = require("../../helpers");

const router = express.Router();

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
});

router.get("/", async (req, res) => {
  try {
    const result = await contacts.getAll();
    res.json(result);
  } catch (error) {
    console.log("Lil Error!");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.getById(id);
    if (!result) {
      throw HttpError(404, "Not found!!!");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(404, error.message);
    }
    const result = await contacts.add(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
