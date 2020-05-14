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

module.exports = router;
