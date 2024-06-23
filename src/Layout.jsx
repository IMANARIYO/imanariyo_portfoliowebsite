import HeadNavBar from "./components/navigation/Navigation";
import React from "react";
import { Outlet } from "react-router-dom";

// components/Layout.jsx

const Layout = () => {
  return (
    <div>
      <HeadNavBar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
