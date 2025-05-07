const express = require("express");
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getSubjectsByCategory,
} = require("../controllers/categoryController");
const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");
const ROLES = require("../config/roles");

const router = express.Router();

router.get("/", authMiddleware, rolesMiddleware(ROLES.ADMIN), getCategories);
router.get(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  getCategoryById
);
router.post("/", authMiddleware, rolesMiddleware(ROLES.ADMIN), createCategory);
router.put(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  updateCategory
);
router.delete(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN),
  deleteCategory
);
router.get("/:categoryId/subjects", getSubjectsByCategory);

module.exports = router;
