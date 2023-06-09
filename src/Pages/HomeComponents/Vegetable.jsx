import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

const Vegetable = () => {

  const [ul, setUl] = useState(false)

  const opnUl= () =>{
    setUl((value)=> !value)
  }
  const context = useContext(GlobalContext)

  
  const handleChange = (value)=>{
    context.searchValue(value)
  }

  return (
    <>
      <section id="vegetable">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
              <div className="category-con">
                <div className="title" onClick={opnUl}>
                  <h6>
                    <i className="fa-solid fa-bars"></i> All departments
                  </h6>
                  <i class="fa-solid fa-angle-down"></i>
                </div>

                <ul className={ul? "click" : ''} >
                  <li>Fresh Meat</li>
                  <li>Vegetables</li>
                  <li>Fruit & Nut Gifts</li>
                  <li>Fresh Berries</li>
                  <li>Ocean Foods</li>
                  <li>Butter & Eggs</li>
                  <li>Fastfood</li>
                  <li>Fresh Onion</li>
                  <li>Papayaya & Crisps</li>
                  <li>Oatmeal</li>
                  <li>Fresh Bananas</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                   <div className="container">
                    <div className="row m-0 p-0">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                   <form>
                        <h5>All Categories <i className="fa-solid fa-angle-down"></i></h5>
                        <input type="text" onChange={(e)=> handleChange(e.target.value)} placeholder="What do you need?" />
                        <button>SEARCH</button>
                    </form>
                   </div>
                   <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                   <div className="con">
                   <div className="fa-solid fa-phone"></div>
                    <div className="p-con">
                        <b>+65 11.188.888</b>
                        <span>support 24/7 time</span>
                    </div>
                   </div>
                   </div>
                    </div>
                   </div>
                        
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vegetable;
