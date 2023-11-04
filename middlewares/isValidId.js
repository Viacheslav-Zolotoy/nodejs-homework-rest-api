const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    throw HttpError(400, `Invalid id: ${contactId}`);
  }
  next();
};

module.exports = isValidId;
