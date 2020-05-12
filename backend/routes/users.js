const router = require("express").Router();
let User = require("../models/user-model");

//First endpoint that handles incoming HTTP GET requests on /users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;
  const newUser = new User({ username, password });

  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
