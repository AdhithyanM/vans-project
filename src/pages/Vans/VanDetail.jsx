import React, { useEffect, useState } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";

const VanDetail = () => {
  const { id } = useParams();
  const location = useLocation(); // has details about current location & any state that's passed from previous link
  const [van, setVan] = useState(null);

  const prevPageSearch = location.state?.search || "";
  const type = location.state?.type || "all";

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

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
