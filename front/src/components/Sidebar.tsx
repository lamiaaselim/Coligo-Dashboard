// components/Sidebar.tsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaHome,
  FaCalendarAlt,
  FaBook,
  FaChartLine,
  FaBullhorn,
  FaGraduationCap,
} from "react-icons/fa";
import "./../styles/Sidebar.css";

const MySidebar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      text: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      text: "Schedule",
      icon: <FaCalendarAlt />,
      path: "/schedule",
    },
    {
      text: "Courses",
      icon: <FaBook />,
      path: "/courses",
    },
    {
      text: "GradeBook",
      icon: <FaGraduationCap />,
      path: "/gradebook",
    },
    {
      text: "Performance",
      icon: <FaChartLine />,
      path: "/performance",
    },
    {
      text: "Announcements",
      icon: <FaBullhorn />,
      path: "/announcements",
    },
  ];

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed); // Toggle collapse state
  };

  return (
    <>
      {/* ProSidebar with collapse functionality */}
      <Sidebar
        className="bg-gradient"
        collapsed={collapsed}
        style={{
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <Menu>
          <MenuItem
            className="py-5"
            icon={collapsed ? <h2>C</h2> : <h2 className="ps-5 ms-5" >Coligo</h2>} // Replace FaBars with "Coligo" or "C"
            onClick={handleToggleSidebar}
            style={{ textAlign: "center" }}
          >
            {/* Empty children to avoid double rendering */}
          </MenuItem>
          {menuItems.map((item) => (
            <MenuItem
              className="py-3 fs-5 bold-text"
              key={item.text}
              icon={item.icon}
              active={location.pathname === item.path}
              onClick={() => (window.location.href = item.path)}
            >
              {!collapsed && item.text}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

export default MySidebar;