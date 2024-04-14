import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { Sider } = Layout;
  function getItem(label, key, icon, children, path) {
    return {
      key,
      icon,
      children,
      label,
      onClick: () => navigate(path),
    };
  }
  const items = [
    getItem(
      "Log Fix",
      "1",
      <FontAwesomeIcon icon={faHome} />,
      null,
      "/log-fix"
    ),
    getItem(
      "Defect Fix",
      "2",
      <FontAwesomeIcon icon={faHome} />,
      null,
      "/defect-fix"
    ),
  ];
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="header-logo-side-bar">
          <img src="vite.svg" alt="logo" />
          {!collapsed && <span>Org.Logo.</span>}
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <div className="dash-content-wrapper">
          <div className="dash-header-wrapper">
            <Header hideIcon />
          </div>
          <div className="dash-content">
            <Outlet />
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
