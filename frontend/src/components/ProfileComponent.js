import React from "react";
import ProfilePicture from "../utility/ProfilePicture";
import ProfileInformation from "../utility/ProfileInformation";

const ProfileComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ProfilePicture />
      <ProfileInformation />
    </div>
  );
};

export default ProfileComponent;
