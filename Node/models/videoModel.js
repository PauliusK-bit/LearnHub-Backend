const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
