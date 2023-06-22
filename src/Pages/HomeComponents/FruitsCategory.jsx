import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { GlobalContext } from "../../Context/GlobalContext";
import { NavLink } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";

const FruitsCategory = () => {
  const context = useContext(GlobalContext);

  const { addItem } = useCart();
  const {addWishlistItem, removeWishlistItem, inWishlist} = useWishlist()

  const myWishList = (myProduct) =>{
    if(inWishlist(myProduct.id)){
      removeWishlistItem(myProduct.id)
    }else{
      addWishlistItem(myProduct)
    }
  }
 

  return (
    <>
      <section id="fruit">
        <div className="container">
          <div className="row ">
            {context.data.map((item, index) => {
              return (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                  <div className="fruit-card">
                    <div className="image">
                      <img src={item.image} alt="" />
                      <div className="i-con">
                        <i className={inWishlist(item.id)? "fa-solid fa-heart" : "fa-regular fa-heart"} onClick={()=> myWishList(item)}></i>
                        <i className="fa-solid fa-right-left"></i>
                        <NavLink to={`/details/${item.id}`}>
                          Details
                        </NavLink>
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
      </section>
    </>
  );
};

export default FruitsCategory;
