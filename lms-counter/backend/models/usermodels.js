const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  cnic_number: {
    type: Number,
    required: true,
    trim: true,
  },
  father_number: {
    type: Number,
    required: true,
    trim: true,
  },
  phone_number: {
    type: Number,
    required: true,
    trim: true,
  },
  email: { type: String, required: true, trim: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
    trim: true,
  },
  religion: {
    type: String,
    required: true,
    trim: true,
    enum: ["Islam", "Christianity", "Judaism", "None"],
  },
  address: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
    enum: ["ICS", "FSc", "Arts", "Pre-Engineering", "Pre-Medical"],
  },
  mother_name: {
    type: String,
    required: true,
    trim: true,
  },
  major: {
    type: String,
    required: true,
    trim: true,
    enum: ["ICS", "FSc", "Arts", "Pre-Engineering", "Pre-Medical"],
  },
});
const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true,
    trim: true,
  },
  instructor: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
    enum: ["ICS", "FSc", "Arts", "Pre-Engineering", "Pre-Medical"],
  },
});
const sectionSchema = new mongoose.Schema({
  section_name: String,
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
});

// Define schema for Announcements collection
const announcementSchema = new mongoose.Schema({
  title: String,
  content: String,
  date_time: { type: Date, default: Date.now },
  section_id: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
});

// Define schema for Timetable collection
const timetableSchema = new mongoose.Schema({
  day: String,
  time: String,
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
});

// Define schema for Attendance collection
const attendanceSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  date: Date,
  status: { type: String, enum: ["Present", "Absent", "Leave"] },
});

// Define schema for Grades collection
const gradesSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  assessment_name: String,
  marks_obtained: Number,
});

// Define schema for Challans collection
const challanSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  amount: Number,
  due_date: Date,
  status: { type: String, enum: ["Paid", "Unpaid"] },
});

// Define and export models
const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);
const Section = mongoose.model("Section", sectionSchema);
const Announcement = mongoose.model("Announcement", announcementSchema);
const Timetable = mongoose.model("Timetable", timetableSchema);
const Attendance = mongoose.model("Attendance", attendanceSchema);
const Grades = mongoose.model("Grades", gradesSchema);
const Challans = mongoose.model("Challans", challanSchema);

module.exports = {
  Student,
  Course,
  Section,
  Announcement,
  Timetable,
  Attendance,
  Grades,
  Challans,
};
