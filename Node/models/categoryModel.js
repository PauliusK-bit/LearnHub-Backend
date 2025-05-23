const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
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
  subjects: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Subject",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
