const Joi = require("joi");

const books = require("../models/books");

const { HttpError } = require("../helpers");

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

const getAll = async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.getById(id);
    if (!result) {
      throw HttpError(404, "Not found");
      // const error = new Error("Not found");
      // error.status = 404;
      // throw error;
      // return res.status(404).json({
      //     message: "Not found"
      // })
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const post = async (req, res, next) => {
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
};

const put = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const result = await books.updateById(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.deleteById(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    // res.status(204).send()
    res.json({
      message: "Delete success",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, post, put, deleteById };
