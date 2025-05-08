const express = require("express");
const {
  getGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
  getGroupStudents,
} = require("../controllers/groupController");
const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");
const ROLES = require("../config/roles");

const router = express.Router();

router.get("/", getGroups);
router.get("/:id", getGroupById);
router.post("/", createGroup);
router.put("/:id", updateGroup);
router.delete("/:id", deleteGroup);
router.get("/:groupId/students", getGroupStudents);

module.exports = router;
