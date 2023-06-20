const { SuperheroModel } = require("../models/mongo");
const { HttpError } = require("../helpers/HttpError");
const { controllerWrapper } = require("../helpers/controllerWrapper");

const getData = async (req, res) => {
  const { page = 1, limit = 30 } = req.query;
  const skip = (page - 1) * limit;
  const result = await SuperheroModel.find().skip(skip).limit(limit);
  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

const getDataById = async (req, res) => {
  const { id } = req.params;
  const result = await SuperheroModel.findById(id);
  if (!result) {
    throw HttpError(404, `Contact with id: ${id} was not found`);
  }
  res.json(result);
};


const removeData = async (req, res) => {
  const { id } = req.params;
  const result = await SuperheroModel.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, { message: "Not found" });
  }
  res.json({ message: "Delete success" });
};

module.exports = { getData, removeData, getDataById };
