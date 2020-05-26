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
    links: {
      type: String,
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
    activities: [
      {
        type: Schema.Types.ObjectId,
        ref: "Activity",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;
