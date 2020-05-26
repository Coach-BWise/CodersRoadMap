const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Unit.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // Since we have an array of courses that any given user can be enrolled in,
  // We look for any courses that match the _id of the courses in the isEnrolled array
  // We have access to this data by using req.user.isEnrolled
  // The $in searches for the values in our array
  findUserCourses: function (req, res) {
    db.Course.find({ _id: { $in: req.user.isEnrolled } })
      .then((userCourses) => {
        res.json(userCourses);
      })
      .catch((err) => console.log(err));
  },
  enrollCourse: function (req, res) {
    db.User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { isEnrolled: req.params.id } },
      { new: true }
    )
      .then((enrolled) => {
        res.json(enrolled);
      })
      .catch((err) => console.log(err));
  },
  unenrollCourse: function (req, res) {
    db.User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { isEnrolled: req.params.id } }
    )
      .then((enrolled) => {
        res.json(enrolled);
      })
      .catch((err) => console.log(err));
  },
};
