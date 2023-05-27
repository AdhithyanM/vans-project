import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const HostVansDetail = () => {
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
      <Link to="/host/vans" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} alt="" />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostVansDetail;
