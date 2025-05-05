const express = require("express");
const {
  getVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");

const router = express.Router();

router.get("/", getVideos);
router.get("/:id", getVideoById);
router.post("/", createVideo);
router.put("/:id", updateVideo);
router.delete("/:id", deleteVideo);

module.exports = router;
