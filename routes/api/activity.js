const router = require("express").Router();
const activityController = require("../../controllers/activityController");

router.post("/", activityController.create);

module.exports = router;
