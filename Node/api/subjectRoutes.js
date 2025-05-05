const express = require("express");
const {
  getSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
  getSubjectVideos,
} = require("../controllers/subjectController");

const router = express.Router();

router.get("/", getSubjects);
router.get("/:id", getSubjectById);
router.post("/", createSubject);
router.put("/:id", updateSubject);
router.delete("/:id", deleteSubject);
router.get("/:subjectId/videos", getSubjectVideos);

module.exports = router;
