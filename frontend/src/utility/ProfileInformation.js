import React, { useEffect, useState } from "react";
import "./Utility.css";

const ProfileInformation = ({ rollNo }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/student/${rollNo}`
        );
        if (!response.ok) {
          const errorDetails = await response.json();
          throw new Error(`Error: ${errorDetails.error}`);
        }
        const data = await response.json();
        setStudent(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [rollNo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!student) {
    return <div>No student data available</div>;
  }

  return (
    <div
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "20px",
        justifyContent: "center",
        overflow: "hidden",
        height: "50%",
        lineHeight: "normal",
        alignContent: "left",
        width: "45%",
      }}
    >
      <div style={{ padding: "10px" }}>
        <h2>General Information</h2>
      </div>
      <table
        border="1"
        style={{
          margin: "10px",
          width: "calc(100% - 20px)",
          borderCollapse: "collapse",
        }}
        className="personalinfo"
      >
        <tbody>
          <tr>
            <td>
              <b>Father Name</b>
            </td>
            <td>{student.father_name}</td>
          </tr>
          <tr>
            <td>
              <b>CNIC</b>
            </td>
            <td>{student.cnic_number}</td>
          </tr>
          <tr>
            <td>
              <b>Phone no.</b>
            </td>
            <td>{student.phone_number}</td>
          </tr>
          <tr>
            <td>
              <b>Email</b>
            </td>
            <td>
              {student.email} <i>(edit)</i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Gender</b>
            </td>
            <td>{student.gender}</td>
          </tr>
          <tr>
            <td>
              <b>Religion</b>
            </td>
            <td>{student.religion}</td>
          </tr>
          <tr>
            <td>
              <b>Address</b>
            </td>
            <td>{student.address}</td>
          </tr>
          <tr>
            <td>
              <b>Department</b>
            </td>
            <td>{student.department}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileInformation;
