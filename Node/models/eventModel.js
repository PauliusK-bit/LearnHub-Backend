const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
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

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
