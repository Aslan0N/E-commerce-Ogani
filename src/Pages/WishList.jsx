import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";

const WishList = () => {
  const { items, inWishlist, removeWishlistItem, addWishlistItem } = useWishlist();
  const { addItem } = useCart();

  const myWishList = (myProduct) =>{
    if(inWishlist(myProduct.id)){
      removeWishlistItem(myProduct.id)
    }else{
      addWishlistItem(myProduct)
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {items.map((item, index) => {
            return (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                <div className="fruit-card">
                  <div className="image">
                    <img src={item.image} alt="" />
                    <div className="i-con">
                      <i
                        className={
                          inWishlist(item.id)
                            ? "fa-solid fa-heart"
                            : "fa-regular fa-heart"
                        }
                        onClick={() => myWishList(item)}
                      ></i>
                      <i className="fa-solid fa-right-left"></i>
                      <NavLink to={`/details/${item.id}`}>Details</NavLink>
                      <i
                        className="fa-solid fa-cart-shopping"
                        onClick={() => {
                          addItem(item);
                          toast.success("Added to cart");
                        }}
                      ></i>
                    </div>
                  </div>
                  <p>{item.title}</p>
                  <span>$ {item.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WishList;
