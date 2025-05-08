const express = require("express");
const {
  getVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");
const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");
const ROLES = require("../config/roles");

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  rolesMiddleware(ROLES.STUDENT, ROLES.ADMIN, ROLES.LECTURER),
  getVideos
);
router.get(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.STUDENT, ROLES.ADMIN, ROLES.LECTURER),
  getVideoById
);
router.post(
  "/",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  createVideo
);
router.put(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  updateVideo
);
router.delete(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  deleteVideo
);

module.exports = router;
