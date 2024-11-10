import React from "react";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider, Divider } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import "./Utility.css";
const colors2 = ["#fc6076", "#ff9a44", "#ef9d43", "#e75516"];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());
const TimetableTimeline = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            lineHeight: "100%",
            paddingLeft: "20px",
            alignItems: "center",
          }}
        >
          {" "}
          <h1 className="class-timeline-h1">Class Timeline</h1>{" "}
        </div>
        <div style={{ lineHeight: "100%", marginRight: "20px" }}>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(90deg,  ${colors2.join(
                    ", "
                  )})`,
                  colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(
                    colors2
                  ).join(", ")})`,
                  colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(
                    colors2
                  ).join(", ")})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button type="primary" size="large">
              Download as PDF <FilePdfOutlined />
            </Button>
          </ConfigProvider>
        </div>
      </div>

      <Divider
        style={{
          height: "4px", // Set the width to make the divider thicker
          backgroundColor: "", // Change the background color to the desired color
          alignSelf: "stretch", //Apply margin on the right and left sides
        }}
      />
      <div className="div-days-timeline">
        <div class="schedule">
          <div class="schedule-item">
            <div class="day"><h3>Monday</h3></div>
            <div class="time">11:00AM-12:30PM</div>
            <div class="divider"></div>
            <div className="room-course">
              <div class="course">Engineering Management</div>
              <div class="room">Room #5</div>
            </div>
            <div class="teacher">Afshan Batool</div>
          </div>
          <div class="schedule-item">
            <div class="day"></div>
            <div class="time">1:30PM-3:00PM</div>
            <div class="divider"></div>
            <div className="room-course">
              <div class="course">Business Management</div>
              <div class="room">Room #10</div>
            </div>
            <div class="teacher">Abdullah Javed</div>
          </div>
        </div>
      </div>
      <Divider
        style={{
          height: "4px", // Set the width to make the divider thicker
          backgroundColor: "", // Change the background color to the desired color
          alignSelf: "stretch", //Apply margin on the right and left sides
        }}
      />
      <div className="div-days-timeline">
        <div class="schedule">
          <div class="schedule-item">
            <div class="day"><h3>Monday</h3></div>
            <div class="time">11:00AM-12:30PM</div>
            <div class="divider"></div>
            <div className="room-course">
              <div class="course">Engineering Management</div>
              <div class="room">Room #5</div>
            </div>
            <div class="teacher">Afshan Batool</div>
          </div>
          <div class="schedule-item">
            <div class="day"></div>
            <div class="time">1:30PM-3:00PM</div>
            <div class="divider"></div>
            <div className="room-course">
              <div class="course">Business Management</div>
              <div class="room">Room #10</div>
            </div>
            <div class="teacher">Abdullah Javed</div>
          </div>
        </div>
      </div>
      <Divider
        style={{
          height: "4px", // Set the width to make the divider thicker
          backgroundColor: "", // Change the background color to the desired color
          alignSelf: "stretch", //Apply margin on the right and left sides
        }}
      />
      <div className="div-days-timeline">
        <div class="schedule">
          <div class="schedule-item">
            <div class="day"><h3>Monday</h3></div>
            <div class="time">11:00AM-12:30PM</div>
            <div class="divider"></div>
            <div className="room-course">
              <div class="course">Engineering Management</div>
              <div class="room">Room #5</div>
            </div>
            <div class="teacher">Afshan Batool</div>
          </div>
          <div class="schedule-item">
            <div class="day"></div>
            <div class="time">1:30PM-3:00PM</div>
            <div class="divider"></div>
            <div className="room-course">
              <div class="course">Business Management</div>
              <div class="room">Room #10</div>
            </div>
            <div class="teacher">Abdullah Javed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimetableTimeline;
