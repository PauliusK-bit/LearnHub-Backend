const express = require("express");
const {
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
} = require("../controllers/activityController");
const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");
const ROLES = require("../config/roles");

const router = express.Router();

router.get("/", getActivities);
router.get("/:id", getActivityById);
router.post("/", authMiddleware, rolesMiddleware(ROLES.ADMIN), createActivity);
router.put(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  updateActivity
);
router.delete(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  deleteActivity
);

module.exports = router;
