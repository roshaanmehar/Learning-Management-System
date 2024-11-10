const express = require("express");
const auth = express.Router();

const { login, test, createStudent, getstudent, getStudentProfile } = require("../controllers/userController");
const authenticateToken = require("../middleware/authMiddleware");

auth.get("/", test);
auth.post("/create", createStudent);
auth.post("/login", login);
auth.get("/student/me", authenticateToken, getStudentProfile);
auth.get("/student/:rollNo", authenticateToken, getstudent);

module.exports = auth;
