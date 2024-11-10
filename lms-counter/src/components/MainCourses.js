import React from "react";
import { Card, Divider } from "antd";
import { Link } from "react-router-dom";

const MainCourses = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "60%",
          backgroundColor: "white",
          display: "flex",
          flexWrap: "wrap", // Enable wrapping
          justifyContent: "space-around", // Adjust as needed
          padding: "20px", // Add padding for spacing
          borderRadius: "20px",
          margin: "10px",
          marginTop: "0px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)", // Add boxShadow property
        }}
      >
        <p
          style={{
            lineHeight: "10px ",
            alignContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          Courses
        </p>
        <Divider />
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit", width:"20%" }}
        >
          <Card
            rounded
            bordered={false}
            style={{
              width: "100%",
              marginLeft: "10px",
              borderRadius: "10px !important",
              height: 125,
              marginBottom: 20,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
            title="Course Code"
          >
            <p>Course Name</p>
          </Card>
        </Link>
        <Card
          style={{
            width: "20%",
            marginLeft: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            height: 125,
            marginBottom: 20,
          }}
          title="Course Code"
        >
          <p>Course Name</p>
        </Card>
        <Card
          style={{
            width: "20%",
            height: 125,
            marginLeft: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: 20,
          }}
          title="Course Code"
        >
          <p>Course Name</p>
        </Card>
        <Card
          style={{
            width: "20%",
            height: 125,
            marginBottom: 20,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            marginLeft: "10px",
          }}
          title="Course Code"
        >
          <p>Course Name</p>
        </Card>
        <Card
          style={{
            width: "20%",
            height: 125,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            marginLeft: "10px",

            marginBottom: 20,
          }}
          title="Course Code"
        >
          <p>Course Name</p>
        </Card>
        <Card
          style={{
            width: "20%",
            height: 125,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: 20,
            marginLeft: "10px",
          }}
          title="Course Code"
        >
          <p>Course Name</p>
        </Card>
        <Card
          style={{
            width: "20%",
            height: 125,
            marginBottom: 20,
            marginLeft: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
          title="Course Code"
        >
          <p>Course Name</p>
        </Card>
        <Card
          style={{
            width: "20%",
            height: 125,
            marginLeft: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: 20,
          }}
          title="Course Code"
        >
          <p>Course Name</p>
        </Card>
      </div>
    </>
  );
};

export default MainCourses;
