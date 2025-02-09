# Learning Management System (LMS)

## Introduction
Welcome to the Learning Management System (LMS), a web-based platform designed to streamline student academic activities. This system provides an intuitive interface where students can easily access course modules, view announcements, track attendance, check their timetables, monitor grades, and handle fee dues.

The LMS enhances academic management by centralizing essential functions into a single, user-friendly platform.

## Features
### 1. **Home Page**
   - Displays available course modules.
   - Shows the latest announcements from instructors and administrators.
   
### 2. **Attendance Management**
   - Students can view their attendance records through a **pie chart representation**.
   - A dropdown menu allows students to check attendance for specific subjects.
   
### 3. **Timetable Management**
   - Displays the student's class schedule for the week.
   - Option to **download the timetable as a PDF**.
   
### 4. **Grade Tracking**
   - Students can check their grades for different assessments.
   - Includes marks obtained in various subjects and exams.

### 5. **Fee Dues Management**
   - Displays remaining fee challans.
   - Status of dues (Paid/Unpaid) is clearly visible.

### 6. **User Authentication & Profile Management**
   - Secure **JWT-based authentication**.
   - Login system using **roll number and CNIC**.
   - Profile page to view student details.

## Installation & Usage
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

### Setup
1. Clone the repository:
   ```sh
   git https://github.com/roshaanmehar/Learning-Management-System.git
   cd lms-system
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add:
     ```env
     JWT_SECRET=your_secret_key
     MONGO_URI=your_mongodb_connection_string
     ```
4. Run the server:
   ```sh
   npm start
   ```

## API Endpoints
### Authentication
- `POST /api/login` - Authenticate user and receive a JWT token.

### Student Management
- `GET /api/student/:rollNo` - Retrieve student details.
- `POST /api/student` - Create a new student record.

### Attendance
- `GET /api/attendance/:studentId` - Fetch attendance records for a student.

### Timetable
- `GET /api/timetable/:studentId` - Get timetable details.
- `GET /api/timetable/download` - Download timetable as PDF.

### Grades
- `GET /api/grades/:studentId` - Retrieve student grades.

### Dues & Challans
- `GET /api/dues/:studentId` - Check pending fee challans.

## Tweaking & Customization
- Modify models in `models/usermodels.js` to change database structure.
- Adjust authentication settings in `authMiddleware.js`.
- Customize API routes in `controllers/` to extend functionality.

## website UI
#### After you have cloned the repo and installed all required prerequisites using `npm i`, and after running `npm start` you should see the home page as given below:
<div>
 <img src="https://github.com/roshaanmehar/Learning-Management-System/blob/main/lmshomepagewithopennavbar.png" width="500">
<img src="https://github.com/roshaanmehar/Learning-Management-System/blob/main/lmshomepagewithcontractednavbar.png" width="500">
</div>
- The one on the right is the same page, but with the navbar closed.

#### This is the timetable page:
<img src="https://github.com/roshaanmehar/Learning-Management-System/blob/main/lmstimetable.png" width="500">
- In orange you should see an option to install the time table as a pdf.

#### This is the attendance page:
<div>
   <img src="https://github.com/roshaanmehar/Learning-Management-System/blob/main/lmsattendancepiechart.png" width="500">
<img src="https://github.com/roshaanmehar/Learning-Management-System/blob/main/lmsattendancepiechartdropdown.png" width="500">
</div>
- This page needs some polish. The Pie Chart library is exceptionally difficult for me to handle. Also, on the right is the same page, with a dropdown that lets you change the subject for which you want to view the attendance.

#### This is the grades page:
<img src="https://github.com/roshaanmehar/Learning-Management-System/blob/main/lmsgrades.png" width="500">
- Spot my mistake! ;)

#### This is the dues page:
<img src="https://github.com/roshaanmehar/Learning-Management-System/blob/main/lmsdues.png" width="500">
- It show paid challans in green and upaid ones in red.

#### This is the profile page:
<img src="https://github.com/roshaanmehar/Learning-Management-System/blob/main/lmsprofile.png" width="500">
- I had accidentally deleted the `.env` file and I just CAN NOT find the `MONGOURI` any more. So, please bear with it. You can create your own collection in your mongodb atlas or compass. 

#### Lastly, this is the login page:
<img src="https://github.com/roshaanmehar/Learning-Management-System/blob/main/lmslogin.png" width="500">
- This login page needs some polish too.


## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Added feature X'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License. Feel free to modify and distribute it as needed.

---
⚠️ **Note:** The backend is not fully complete, and some features may still be in development. If you encounter any issues, please report them.

