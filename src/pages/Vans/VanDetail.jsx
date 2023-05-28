import React from "react";
import { NavLink, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }) {
  // loader function will not have access to hooks. hence we use this params object provided by react-router
  return getVans(params.id);
}

const VanDetail = () => {
  const location = useLocation(); // has details about current location & any state that's passed from previous link
  const van = useLoaderData();

  const prevPageSearch = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <NavLink
        to={`..${prevPageSearch}`}
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to {type} vans</span>
      </NavLink>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt="" />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
