const express = require("express");
const {
  getSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
  getSubjectVideos,
} = require("../controllers/subjectController");
const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");
const ROLES = require("../config/roles");

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  getSubjects
);
router.get(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  getSubjectById
);
router.post(
  "/",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  createSubject
);
router.put(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  updateSubject
);
router.delete(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  deleteSubject
);
router.get("/:subjectId/videos", getSubjectVideos);

module.exports = router;
