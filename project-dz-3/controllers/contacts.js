const Joi = require("joi");

const contacts = require("../models/");
const { HttpError } = require("../helpers");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
});

const getAll = async (req, res) => {
  try {
    const result = await contacts.getAll();
    res.json(result);
  } catch (error) {
    console.log("Lil Error!");
  }
};

const getById = async (req, res, next) => {
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
};

const add = async (req, res, next) => {
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
};

const updateById = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(404, error.message);
    }
    const { id } = req.params;
    const result = await contacts.updateById(id, req.body);

    if (!result) {
      throw HttpError(404, "Not found!");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.deleteById(id);

    if (!result) {
      throw HttpError(404, "Not found!");
    }
    res.json({ message: "Delete success!!!" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, add, updateById, deleteById };
