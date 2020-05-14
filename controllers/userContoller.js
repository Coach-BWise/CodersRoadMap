const db = require("../models");
const passport = require("../config/passport");

module.exports = {
  create: function (req, res) {
    db.User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(422).json(err));
  },
};
