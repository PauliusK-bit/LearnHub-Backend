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

router.get("/", authMiddleware, rolesMiddleware(ROLES.ADMIN), getGroups);
router.get("/:id", authMiddleware, rolesMiddleware(ROLES.ADMIN), getGroupById);
router.post("/", authMiddleware, rolesMiddleware(ROLES.ADMIN), createGroup);
router.put("/:id", authMiddleware, rolesMiddleware(ROLES.ADMIN), updateGroup);
router.delete(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  deleteGroup
);
router.get("/:groupId/students", getGroupStudents);

module.exports = router;
