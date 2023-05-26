import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
