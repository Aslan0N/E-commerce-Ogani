import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselData from "../../Data/Carouse.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";


// import "./styles.css";

// import required modules
import { Navigation, Autoplay } from "swiper";

const Carousel = () => {
  return (
    <>
      <section id="carousel">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <h4>Latest Products</h4>
            <Swiper
              navigation={false}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              slidesPerView={1}
              loop
              autoplay={{ delay: 2000 }}
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
            
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <h4>Top Rated Products</h4>
            <Swiper
               navigation={false}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              slidesPerView={1}
              loop
              autoplay={{ delay: 2000 }}
              loopedSlides={true}
              onTimeUpdate={1000}
            >
              <SwiperSlide >
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
             
              <SwiperSlide >
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
            
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <h4>Review Products</h4>
            <Swiper
              navigation={false}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              slidesPerView={1}
              loop
              autoplay={{ delay: 2000 }}
              loopedSlides={true}
              onTimeUpdate={1000}
            >
              <SwiperSlide >
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
             
              <SwiperSlide >
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
      </section>
    </>
  );
};

export default Carousel;
