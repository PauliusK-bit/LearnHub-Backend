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

router.get(
  "/",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER, ROLES.STUDENT, ROLES.USER),
  getCategories
);
router.get(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER, ROLES.STUDENT),
  getCategoryById
);
router.post(
  "/",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  createCategory
);
router.put(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  updateCategory
);
router.delete(
  "/:id",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER),
  deleteCategory
);
router.get(
  "/:categoryId/subjects",
  authMiddleware,
  rolesMiddleware(ROLES.ADMIN, ROLES.LECTURER, ROLES.STUDENT),
  getSubjectsByCategory
);

module.exports = router;
