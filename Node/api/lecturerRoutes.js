const express = require("express");
const {
  getLecturers,
  getLecturerById,
  createLecturer,
  updateLecturer,
  deleteLecturer,
  getStudentsByLecturer,
} = require("../controllers/lecturerController");

const router = express.Router();

router.get("/", getLecturers);
router.get("/:id", getLecturerById);
router.post("/", createLecturer);
router.put("/:id", updateLecturer);
router.delete("/:id", deleteLecturer);
router.get("/:lecturerId/students", getStudentsByLecturer);

module.exports = router;
