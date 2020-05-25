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
    videos: {
      type: String,
      required: true,
    },
    resources: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model("Activity", unitSchema);

module.exports = Activity;
