const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const unitSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    links: {
      type: String,
      required: true,
    },
    activityLinks: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;
