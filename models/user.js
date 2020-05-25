const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isInstructor: { type: Boolean, default: false },
  isEnrolled: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre("save", function (next) {
  this.password = this.generateHash(this.password);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
