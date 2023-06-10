import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselData from "../../Data/Carouse.json";
import Sale from '../../Data/Sale.json'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import "./styles.css";

// import required modules
import { Navigation,Autoplay } from "swiper";
import FruitsCategory from "../HomeComponents/FruitsCategory";
import TaskBar from "./TaskBar";

const Department = () => {
  return (
    <>
      <section id="department">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-3">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>Department</h3>

                    <ul>
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
                    </ul>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>Price</h3>
                    <div className="range-con">
                    <div className="circle first"></div>
                        <div className="range"></div>
                    <div className="circle second"></div>
                    </div>
                    <p className="p">$10 - $540</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>Colors</h3>
                    <div className="color-con">
                        <div className="color">
                            <span className="white"></span>
                            <p>White</p>
                        </div>
                        <div className="color">
                            <span className="orange"></span>
                            <p>Orange</p>
                        </div>
                        <div className="color">
                            <span className="red"></span>
                            <p>Red</p>
                        </div>
                        <div className="color">
                            <span className="black"></span>
                            <p>Black</p>
                        </div>
                        <div className="color">
                            <span className="blue"></span>
                            <p>Blue</p>
                        </div>
                        <div className="color">
                            <span className="green"></span>
                            <p>Green</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <h3>Popular Size</h3>
                    <div className="size-con">
                    <span>Large</span>
                    <span>Medium</span>
                    <span>Small</span>
                    <span>Tiny</span>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <h4>Latest Products</h4>
            <Swiper
              navigation={false}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              slidesPerView={1}
              loop
              autoplay={{ delay: 1000 }}
              loopedSlides={true}
              onTimeUpdate={1000}
                
            >
              <SwiperSlide className="">
                {CarouselData.map((item) => {
                  return (<div className="card-car">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="body-carusel">
                      <p>{item.title}</p>
                      <span>$ {item.price}</span>
                    </div>
                  </div>
                  )
                })}
              </SwiperSlide>
             
              <SwiperSlide className="">
                {CarouselData.map((item) => {
                  return (<div className="card-car">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="body-carusel">
                      <p>{item.title}</p>
                      <span>$ {item.price}</span>
                    </div>
                  </div>
                  )
                })}
              </SwiperSlide>
            </Swiper>
                  </div>
                  </div>
                </div>
              </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-9">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <h2>Sale off</h2>
                  <Swiper
               navigation={false}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              slidesPerView={3}
              loop
              autoplay={{ delay: 1000 }}
              loopedSlides={true}
              onTimeUpdate={1000}
                
            >
                {Sale.map((item) => {
                  return (
              <SwiperSlide className="">
                    <div className="row-card">
                        <img src={item.image} alt="" />
                        <span>Dried Fruit</span>
                        <p>Raisin'n'nuts</p>
                        <p><b>$ 30.00</b> <small><del>$36.00</del></small></p>
                    </div>
              </SwiperSlide>
                  )
                })}
             
              
            </Swiper>
                  </div>
                  <hr />
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskBar/>
                    <FruitsCategory/>
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

export default Department;
