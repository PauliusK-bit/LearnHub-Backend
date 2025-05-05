const Video = require("../models/videoModel");

const createVideo = async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.send(video);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getVideos = async (req, res) => {
  try {
    const videoId = req.query._videoId;

    const filter = {};
    if (videoId) {
      filter.videoId = videoId;
    }
    const videos = await Video.find(filter);
    res.send(videos);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);

    if (!video) {
      return res.status(404).send({ error: "Video Not found" });
    }

    res.send(video);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedVideo = await Video.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedVideo) {
      return res.status(404).send({ error: "Video Not found" });
    }

    res.send(updatedVideo);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedVideo = await Video.findByIdAndDelete(id);

    if (!deletedVideo) {
      return res.status(404).send({ error: "Video Not found" });
    }

    res.send({ message: "Video was removed", data: deletedVideo });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
