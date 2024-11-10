const Student = require("../models/usermodels");

const createStudent = async (req, res) => {
  try {
    // Extracting required fields from request body
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
    } = req.body;

    // Validating required fields
    if (!name || !cnic_number || !father_name || !phone_number || !email || !religion || !address || !department || !mother_name || !major) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Creating student in the database
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
      major
    });

    // Sending success response
    res.status(201).json({ message: "Student added successfully", data: newStudent });
  } catch (error) {
    // Handling errors
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createStudent };
