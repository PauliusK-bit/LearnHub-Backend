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

router.get("/", getLecturers);
router.get("/:id", getLecturerById);
router.post("/", createLecturer);
router.put("/:id", updateLecturer);
router.delete("/:id", deleteLecturer);
router.get("/:lecturerId/students", getStudentsByLecturer);
router.get("/:lecturerId/groups", getLecturerGroups);

module.exports = router;
