import React, { useState, useEffect } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";

const HostVansDetail = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const [van, setVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  if (!van) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <NavLink to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </NavLink>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} alt="" />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
        {/* Host van detail nav bar */}
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="./photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
          <NavLink
            to="./pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </section>
  );
};

export default HostVansDetail;
