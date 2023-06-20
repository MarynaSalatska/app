const express = require("express");
const { getData, getDataById } = require("../controllers/dataController");
const {removeData} = require("../controllers/dataController")
const isValidId = require("../middlewares/isValidId");

const router = express.Router();

// Define your endpoint to fetch data from the collection
router.get("/api/data", getData);
router.get("/api/data/:id", isValidId, getDataById);
router.delete("/api/data/:id", isValidId, removeData);


module.exports = router;
