const router = require("express").Router();
const userController = require("../../controllers/userContoller");
const passport = require("../../config/passport");

// sign up route
router.route("/add").post(userController.create);

// login route
router
  .route("/login")
  .post(passport.authenticate("local-login"), (req, res) => {
    res.send(req.body);
  });

router.get("/", (req, res, next) => {
  if (req.user) {
    return res.json({ user: req.user });
  } else {
    return res.json({ user: null });
  }
});

router.route("/my-courses").get(userController.findUserCourses);

router.post("/logout", (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie("connect.sid"); // clean up!
    return res.json({ msg: "logging you out" });
  } else {
    return res.json({ msg: "no user to log out!" });
  }
});

module.exports = router;
