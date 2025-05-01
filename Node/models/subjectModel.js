const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 2,
  },
  description: {
    type: String,
    maxLength: 200,
  },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
