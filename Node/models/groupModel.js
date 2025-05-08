const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    name: String,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
    lecturerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lecturer",
    },
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
