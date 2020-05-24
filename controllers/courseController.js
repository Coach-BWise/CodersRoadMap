const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Course.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findUserCourses: function (req, res) {
    db.User.findOne(req.user._id)
      .populate("Course")
      .then((courses) => res.json(courses))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Course.create(req.body)
      .then((dbCourse) =>
        db.User.findOneAndUpdate(
          { _id: "5ecaa318839dcac24809601e" },
          { $push: { course: dbCourse._id } },
          { new: true }
        )
      )
      .catch((err) => res.status(422).json(err));
  },
  enrollOne: function (req, res) {
    db.Course.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $push: { enrolled: "5ecaa318839dcac24809601e" } },
      { new: true }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
