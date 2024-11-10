import React from "react";
import { Image } from "antd";
const ProfilePicture = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "5% ",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          width: "200px",
          border: "1px solid #ccc",
          borderRadius: "50%",
          overflow: "hidden",
          height: "50%",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          style={{ borderRadius: "50%" }}
          preview={false}
        />
      </div>
      <div style={{ lineHeight: "normal" }}>
        <h1 style={{ textAlign: "center" }}>Name</h1>
        <h3 style={{ textAlign: "center" }}>Roll Number</h3>
      </div>
    </div>
  );
};

export default ProfilePicture;
