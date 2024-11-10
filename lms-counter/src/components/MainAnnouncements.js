import React from "react";
import { Descriptions } from "antd";

const MainAnnouncements = () => {
  return (
    <div
      style={{
        borderRadius: "20px",
        margin: "10px",
        padding: "10px", // Add padding to the outer div
        backgroundColor:"white",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "10px", // Add margin at the bottom of the heading
        }}
      >
        <h1 style={{ lineHeight: "220%" }}>Announcements</h1>
      </div>
      <div style={{ display: "flex" }}>
        {/* First column */}
        <div style={{ width: "20%" }}>
          <Descriptions
            layout="vertical"
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} // Set column count to 1 for smaller screens
            style={{}} // Add margin to separate columns
            items={[
              {
                label: "Title",
                children: "College Holidays",
              },
            ]}
          />
        </div>
        {/* Second column */}
        <div style={{ width: "20%" }}>
          <Descriptions
            layout="vertical"
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} // Set column count to 1 for smaller screens
            style={{}} // Add margin to separate columns
            items={[
              {
                label: "Date",
                children: "May 24, 2024",
              },
            ]}
          />
        </div>
        {/* Third column */}
        <div style={{ width: "60%", textAlign:"justify" }}>
          <Descriptions
            layout="vertical"
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} // Set column count to 1 for smaller screens
            items={[
              {
                label: "Description",
                children:
                  "We are pleased to inform you that the college administration has decided to grant a holiday period of two months, effective immediately. This decision has been made in consideration of various factors, including the current circumstances and the well-being of our students. During this time, we encourage you to utilize the break to rejuvenate, pursue personal interests, and engage in activities that contribute to your overall growth and development. While enjoying this well-deserved break, we also urge you to stay safe, maintain good health practices, and adhere to any relevant guidelines provided by health authorities. We look forward to welcoming you back refreshed and rejuvenated at the end of this holiday period.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MainAnnouncements;
