const express = require("express");

const ctrl = require("../../controllers/books");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.post);

router.put("/:id", ctrl.put);

router.delete("/:id", ctrl.deleteById);

module.exports = router;
