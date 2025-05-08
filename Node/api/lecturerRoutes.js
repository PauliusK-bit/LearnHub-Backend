const express = require("express");
const {
  getLecturers,
  getLecturerById,
  createLecturer,
  updateLecturer,
  deleteLecturer,
  getStudentsByLecturer,
  getLecturerGroups,
} = require("../controllers/lecturerController");
const rolesMiddleware = require("../middlewares/rolesMiddleware");
const ROLES = require("../config/roles");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, rolesMiddleware(ROLES.ADMIN), getLecturers);
router.get(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  getLecturerById
);
router.post("/", authMiddleware, rolesMiddleware(ROLES.ADMIN), createLecturer);
router.put(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  updateLecturer
);
router.delete(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  deleteLecturer
);
router.get(
  "/:lecturerId/students",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  getStudentsByLecturer
);
router.get(
  "/:lecturerId/groups",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  getLecturerGroups
);

module.exports = router;
