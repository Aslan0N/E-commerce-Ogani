import React from "react";
import { NavLink } from "react-router-dom";

const DetailsCard = ({ product }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="card" style={{ width: "100%", height: "100%" }}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <NavLink className="btn btn-dark" to={`/details/${product.id}`}>Details</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
