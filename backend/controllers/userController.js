const jwt = require("jsonwebtoken");
const { Student } = require("../models/usermodels");

const login = async (req, res) => {
  const { roll_no, cnic } = req.body;
  try {
    console.log("Received credentials:", { roll_no, cnic });
    const student = await Student.findOne({
      roll_no: roll_no,
      cnic_number: cnic,
    });
    if (!student) {
      console.log("Invalid credentials");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    console.log("Student found:", student);
    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getStudentProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getstudent = async (req, res) => {
  try {
    const rollNo = req.params.rollNo;
    const student = await Student.findOne({ roll_no: rollNo });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createStudent = async (req, res) => {
  try {
    const {
      name,
      cnic_number,
      father_name,
      phone_number,
      email,
      religion,
      address,
      department,
      mother_name,
      major,
      gender,
      father_number,
      roll_no,
    } = req.body;

    if (
      !name ||
      !cnic_number ||
      !father_name ||
      !phone_number ||
      !email ||
      !religion ||
      !address ||
      !department ||
      !mother_name ||
      !major || 
      !gender ||
      !father_number ||
      !roll_no
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newStudent = await Student.create({
      name,
      cnic_number,
      father_name,
      phone_number,
      email,
      religion,
      address,
      department,
      mother_name,
      major,
      gender,
      father_number,
      roll_no,
    });

    res
      .status(201)
      .json({ message: "Student added successfully", data: newStudent });
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const test = (req, res) => {
  res.send("API is working");
};

module.exports = { login, test, createStudent, getstudent, getStudentProfile };
