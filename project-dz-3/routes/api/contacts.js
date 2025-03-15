const express = require("express");

const contacts = require("../../models/");
const { HttpError } = require("../../helpers");

const router = express.Router();

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
      // const error = new Error("Not found!!!");
      // error.status = 404;
      // throw error;
    }
    res.json(result);
  } catch (error) {
    // const { status = 500, message = "SERVER ERRORR" } = error;
    // res.status(status).json({ message });
    next(error);
  }
});

module.exports = router;
