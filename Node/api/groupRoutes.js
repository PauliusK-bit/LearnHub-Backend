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

router.get(
  "/",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  getGroups
);
router.get(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  getGroupById
);
router.post(
  "/",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  createGroup
);
router.put(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  updateGroup
);
router.delete(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  deleteGroup
);
router.get(
  "/:groupId/students",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  getGroupStudents
);

module.exports = router;
