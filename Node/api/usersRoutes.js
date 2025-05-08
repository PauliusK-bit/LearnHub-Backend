const express = require("express");
const {
  register,
  login,
  getUsers,
  deleteUser,
  getUserById,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");
const ROLES = require("../config/roles");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", authMiddleware, rolesMiddleware(ROLES.ADMIN), getUsers);
router.delete("/:id", authMiddleware, rolesMiddleware(ROLES.ADMIN), deleteUser);
router.get("/:id", authMiddleware, rolesMiddleware(ROLES.ADMIN), getUserById);

module.exports = router;
