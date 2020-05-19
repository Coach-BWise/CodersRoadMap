const router = require("express").Router();
const unitController = require("../../controllers/unitController");

// get all units
router.get("/", unitController.findAll);

module.exports = router;
