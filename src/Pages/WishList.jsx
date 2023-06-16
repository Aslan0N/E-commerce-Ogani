import React from "react";
import { useWishlist } from "react-use-wishlist";

const WishList = () => {
  const { items } = useWishlist();

  const myData =[items.filter(card=> card.id !== card)] 
  return (
    <>
      {myData.map((item) => {
        return (
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="fruit-card">
              <div className="image">
                <img src={item.image} alt="" />
                <div className="i-con"></div>
              </div>
              <p>{item.title}</p>
              <span>$ {item.price}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WishList;
