import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    label: <Link to="/profile">Profile</Link>,
    key: "0",
  },
  {
    label: <Link to="/login">Login</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const DropdownHeaderButton = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <Badge dot>
          <Avatar
            shape="circle"
            direction="vertical"
            size={44}
            icon={<UserOutlined />}
          />
        </Badge>
      </Space>
    </a>
  </Dropdown>
);
export default DropdownHeaderButton;
