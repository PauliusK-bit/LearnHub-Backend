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

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.get("/:categoryId/subjects", getSubjectsByCategory);

module.exports = router;
