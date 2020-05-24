const router = require("express").Router();
const userRoutes = require("./users");
const unitRoutes = require("./units");
const activityRoutes = require("./activity");
const courseRoutes = require("./course");

// Book routes
router.use("/users", userRoutes);

// Units routes
router.use("/units", unitRoutes);

// Activites routes
router.use("/activites", activityRoutes);

// Course routes
router.use("/course", courseRoutes);

module.exports = router;
