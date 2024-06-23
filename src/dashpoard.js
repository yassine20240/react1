import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./sidebar"; // Ensure the correct import path

let Dashboard = () => {
  return (
    <>
      <div className="toppar">
        <h2>Store</h2>
        <Link to="bar">
          <button>Go to website</button>
        </Link>
      </div>

      <Link to="users">
        <button>User</button>
      </Link>

      <Sidebar />
      <Outlet />
    </>
  );
};

export default Dashboard;
