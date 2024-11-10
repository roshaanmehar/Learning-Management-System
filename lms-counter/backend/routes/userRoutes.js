const express = require("express");

const auth = express.Router();

const { test, createStudent } = require("../controllers/userController");

auth.get("/", test);

auth.post("/api/create", createStudent);

module.exports = auth;

