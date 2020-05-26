const router = require("express").Router();
const unitController = require("../../controllers/unitController");

// get all units in the specified course
router.get("/", unitController.findAll);

module.exports = router;
