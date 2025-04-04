const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw HttpError(404, error.message);
    }
    next();
  };
  return func;
};

module.export = validateBody;
