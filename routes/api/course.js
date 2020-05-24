const router = require("express").Router();
const courseController = require("../../controllers/courseController");

// get all courses
router.get("/", courseController.findAll);

router.post("/:id", courseController.enrollOne);

// router.post("/create-course/", courseController.create);

module.exports = router;
