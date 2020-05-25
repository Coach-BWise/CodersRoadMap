const router = require("express").Router();
const courseController = require("../../controllers/courseController");

// get all courses
router.get("/", courseController.findAll);

router.post("/create", courseController.create);

module.exports = router;
