const router = require("express").Router();
const userRoutes = require("./users");
const unitRoutes = require("./units");
const activityRoutes = require("./activity");

// Book routes
router.use("/users", userRoutes);

// Units routes
router.use("/units", unitRoutes);

// Activites routes
router.use("/activites", activityRoutes);

module.exports = router;
