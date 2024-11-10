import { Input, Tooltip, Button, message } from "antd";
import React, { useState } from "react";
import {
  UserOutlined,
  InfoCircleOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import axios from "axios";

const Login = () => {
  const [rollNo, setRollNo] = useState("");
  const [cnic, setCnic] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { rollNo, cnic });
      localStorage.setItem("token", response.data.token);
      message.success("Login successful!");
      // Redirect to a protected route or fetch user data
    } catch (error) {
      message.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      style={{
        width: "50%",
        height: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "lightgray",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <div style={{ alignContent: "center", padding: "5px", margin: "10px" }}>
        <h1>Login</h1>
      </div>
      <Input
        style={{ marginTop: "20px" }}
        placeholder="Enter your Roll Number"
        size="large"
        prefix={
          <UserOutlined
            style={{
              color: "rgba(0,0,0,.25)",
            }}
          />
        }
        suffix={
          <Tooltip title="Please Enter Your Roll Number as Username and CNIC as password.">
            <InfoCircleOutlined
              style={{
                color: "rgba(0,0,0,.45)",
              }}
            />
          </Tooltip>
        }
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />
      <Input.Password
        style={{ marginTop: "20px" }}
        placeholder="Enter your CNIC"
        size="large"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        value={cnic}
        onChange={(e) => setCnic(e.target.value)}
      />
      <button
        type="submit"
        style={{ marginTop: "20px" }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
