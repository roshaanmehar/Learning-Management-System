import React from "react";
import { Avatar, Card, } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const TimetableInfo = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "18px", width: "100%" }}>
        <Card
          style={{
            width: "25%",
            height: "100%",
            marginTop: "20px",
            margin: "10px",
            border: "none",
          }}
        >
          <h2 style={{ fontFamily: "sans-serif" }}>Roshaan Ali Mehar</h2>
          <p>Name</p>
        </Card>
        <div
          style={{
            width: "5px",
            backgroundColor: "green",
            height: "80%",
            marginTop: "25px",
            marginBottom: "6px",
          }}
        />
        <Card
          style={{
            width: "25%",
            height: "100%",
            marginTop: "20px",
            margin: "10px",
            border: "none",
          }}
        >
          <h2 style={{ fontFamily: "sans-serif" }}>1042-1-21</h2>
          <p>Roll #</p>
        </Card>
        <div
          style={{
            width: "5px",
            backgroundColor: "green",
            height: "80%",
            marginTop: "25px",
            marginBottom: "6px",
          }}
        />

        <Card
          style={{
            width: "25%",
            border: "none",
            height: "100%",
            marginTop: "20px",
            margin: "10px",
          }}
        >
          <h2 style={{ fontFamily: "sans-serif" }}>ICS</h2>
          <p>Major</p>
        </Card>
        <div
          style={{
            width: "5px",
            backgroundColor: "green",
            height: "80%",
            marginTop: "25px",
            marginBottom: "6px",
          }}
        />

        <Card
          style={{
            width: "25%",
            height: "100%",
            marginTop: "3px",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            border: "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/profile">
            <Avatar
              shape="circle"
              direction="vertical"
              size={44}
              icon={<UserOutlined style={{ color: "black" }} />}
            />
          </Link>
          <p>View Profile</p>
        </Card>
      </div>
      
    </>
  );
};

export default TimetableInfo;
