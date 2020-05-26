const db = require("../models");

module.exports = {
  findOne: function (req, res) {
    db.Course.findOne({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
