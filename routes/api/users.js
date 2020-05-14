const router = require("express").Router();
const userController = require("../../controllers/userContoller");
const passport = require("../../config/passport");

// sign up route
router.route("/add").post(userController.create);

// login route
router.route("/login").post(
  function (req, res, next) {
    console.log("routes/user.js, login, req.body: " + req.body);
    next();
  },
  passport.authenticate("local-login"),
  (req, res) => {
    console.log(req.body);
    res.send(req.body);
  }
);

module.exports = router;
