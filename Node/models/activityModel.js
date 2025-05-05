const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  eventDate: {
    type: Date,
  },
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
