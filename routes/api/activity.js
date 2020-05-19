const router = require("express").Router();
const activityController = require("../../controllers/activityController");

// get all html units
router.get("/html", activityController.findAll);

module.exports = router;
