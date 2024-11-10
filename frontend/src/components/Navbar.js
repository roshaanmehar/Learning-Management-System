import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  CalendarOutlined,
  HomeOutlined,
  MenuOutlined,
  StarOutlined,
  ScheduleOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";

// Define the menu items with their respective keys, icons, labels, and links
const items = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Home",
    link: "/",
  },
  {
    key: "2",
    icon: <CalendarOutlined />,
    label: "Time Table",
    link: "/timetable",
  },
  {
    key: "3",
    icon: <ScheduleOutlined />,
    label: "Attendance",
    link: "/attendance",
  },
  {
    key: "4",
    icon: <StarOutlined />,
    label: "Grades",
    link: "/grades",
  },
  {
    key: "5",
    icon: <MoneyCollectOutlined />,
    label: "Dues",
    link: "/dues",
  },
  {
    key: "6",
    icon: <MenuOutlined />,
    label: "Profile",
    link: "/profile",
  },
];

const Navbar = () => {
  // State to manage the collapsed state of the Sider component
  const [collapsed, setCollapsed] = useState(false);
  
  // Function to toggle the collapsed state
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // Get the current location using the useLocation hook
  const location = useLocation();
  
  // State to manage the selected key of the active menu item
  const [selectedKey, setSelectedKey] = useState("");

  // Effect to update the selected key when the location changes
  useEffect(() => {
    // Get the current pathname from the location object
    const pathname = location.pathname;
    
    // Find the corresponding menu item based on the pathname
    const selectedItem = items.find((item) => item.link === pathname);
    
    // Update the selected key if a matching menu item is found
    if (selectedItem) {
      setSelectedKey(selectedItem.key);
    } else {
      setSelectedKey(""); // Reset the selected key if no matching item is found
    }
  }, [location]); // Run this effect whenever the location changes

  return (
    <div style={{backgroundColor:"#ffffff"}}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        style={{backgroundColor:"transparent",  height:"100%", borderTop:"1px solid #ebebeb"}}
        className="navbar"
      >
        <Menu
          mode="inline"
          
          style={{ minHeight: "100%", width: "100%" }}
          inlineCollapsed={collapsed}
          selectedKeys={[selectedKey]} // Highlight the active menu item
        >
          {/* Render menu items based on the items array */}
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </div>
  );
};

export default Navbar;
