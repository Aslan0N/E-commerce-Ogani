import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { data } = useContext(GlobalContext);
  const myProduct = data.find((item) => item.id.toString() === id);
  return (
    <>
      {!myProduct ? (
        "wait"
      ) : (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
          <div className="fruit-card">
            <div className="image">
              <img src={myProduct.image} alt="" />
            </div>
            <p>{myProduct.title}</p>
            <span>$ {myProduct.price}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
