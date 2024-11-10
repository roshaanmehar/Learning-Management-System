import { Input, Tooltip } from "antd";
import React from "react";
import {
  UserOutlined,
  InfoCircleOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
const Login = () => {
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
        textAlign:"center",
        borderRadius: "10px",
      }}
    >
        <div style={{alignContent:"center", padding:"5px", margin:"10px"}}><h1>Login</h1></div>
      <Input
      style={{marginTop:"20px"}}
        placeholder="Enter your Username"
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
      />
      <Input.Password
      style={{pading:"20px", marginTop:"20px"}}
        placeholder="Input Password"
        size="large"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </div>
  );
};

export default Login;
