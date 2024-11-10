import React from "react";
import { Flex, Layout } from "antd";
import "./layouts.css";
import Navbar from "../components/Navbar";
import HeaderMenu from "../components/Header";
import MainContent from "../pages/MainContent";
import { Route, Routes, useLocation } from "react-router-dom";
import Timetable from "../pages/Timetable";
import Attendance from "../pages/Attendance";
import Grades from "../pages/Grades";
import Dues from "../pages/Dues";
import Profile from "../pages/Profile";
import CourseInformation from "../pages/CourseInformation";
import Login from "../pages/Login";
const { Header, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  minHeight: "100vh",
};
const Layouts = () => {
  const location = useLocation();
  const isLoginroute = location.pathname === "/login";
  return (
    <Flex gap="middle" wrap>
      {!isLoginroute && (
        <Layout style={layoutStyle}>
          <Header className="header" style={headerStyle}>
            <HeaderMenu />
          </Header>
          <Layout>
            <Navbar />
            <Content style={contentStyle}>
              <div style={{ borderTop: "1px solid #ebebeb", height: "85%" }}>
                <Routes>
                  <Route path="/" exact Component={MainContent} />
                  <Route path="/timetable" exact Component={Timetable} />
                  <Route path="/attendance" exact Component={Attendance} />
                  <Route path="/grades" exact Component={Grades} />
                  <Route path="/dues" exact Component={Dues} />
                  <Route path="/profile" exact Component={Profile} />
                  <Route
                    path="/courses/:id"
                    exact
                    Component={CourseInformation}
                  />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      )}
      {isLoginroute && (
        <div style={{width:"100%"}}>
          <Flex gap="middle" wrap style={{width:"100%"}}>
            <Layout style={layoutStyle}>
              <Header className="header" style={headerStyle}>
                <HeaderMenu />
              </Header>
              <Routes>
                <Route path="/login" exact Component={Login} />{" "}
              </Routes>
            </Layout>
          </Flex>
        </div>
      )}
    </Flex>
  );
};
export default Layouts;
