import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { GlobalContext } from "../../Context/GlobalContext";

const FruitsCategory = () => {
  // const [category, setCategory] = useState([
  //   "All",
  //   "Oranges",
  //   "Fresh Meat",
  //   "Vegetables",
  //   "Fastfood",
  // ]);

  // const [data, setData] = useState(Fruits);

  // const myFilter = (category) => {
  //   const filtered = Fruits.filter((item) => {
  //     return item.category === category;
  //   }); 
  //   setData(filtered);
  // };
  const context = useContext(GlobalContext)

  const { addItem } = useCart();

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
                        <i className="fa-solid fa-heart"></i>
                        <i className="fa-solid fa-right-left"></i>
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
