import React from "react";
import GradesTable from "../components/GradesTable";

const Grades = () => {
  return (
    <div>
      <div
        style={{ lineHeight: "normal", textAlign: "left !important", marginTop:"2%" }}
        className="attendance-div"
      >
        <h1>Attendance</h1>
      </div>
      <GradesTable />
    </div>
  );
};

export default Grades;
