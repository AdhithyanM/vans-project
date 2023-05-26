import React from "react";
import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  console.log(Outlet);
  return (
    <>
      <div>
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;