const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Activity.create(req.body)
      .then((newActivity) => res.json(newActivity))
      .catch((err) => res.status(422).json(err));
  },
};
