import React from "react";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";

const Basket = () => {
  const { items, updateItemQuantity, removeItem, setItems, cartTotal, isEmpty } =
    useCart();
    if (isEmpty) return(
       <section className="empty">
         <i className="fa-solid fa-check"></i>
       </section>
    ) 
    
    return (
        <>
      <section id="basket">
      {
        
      }
        <table>
          <thead>
            <th></th>
            <th>Photo</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </thead>
          {items.map((item) => {
            return (
              <tbody>
                <td>
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => {
                      removeItem(item.id);
                      toast.warning("Removed from cart");
                    }}
                  ></i>
                </td>
                <td>
                  <img className="my-2" width={130} src={item.image} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <div className="quantity">
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{(item.price * item.quantity).toFixed(2)}</td>
              </tbody>
            );
          })}
        </table>
      </section>
      <div className="con total">
        <div className="row">
          <div className="col-12 col-sm-12 col-ms-12 col-lg-12">
            <h3>Subtotal: {cartTotal.toFixed(2)} </h3>
          </div>
          <div className="col-12 col-sm-12 col-ms-12 col-lg-12">
            <button onClick={() => setItems([])}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
