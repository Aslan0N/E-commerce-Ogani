import React from "react";
import CategoryData from "../../Data/CategoryData.json";

const Cards = () => {
  return (
    <>
      <section id="cards">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <form>
                      <input type="text" placeholder="Search..." />
                      <i className="fa-solid fa-search"></i>
                    </form>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>Categories</h3>
                    <ul>
                      <li>All</li>
                      <li>Beauty(20)</li>
                      <li>Food(5)</li>
                      <li>Life Style(9)</li>
                      <li>Travel(10)</li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>Recent News</h3>
                    <div className="my-card">
                      <img
                        src="https://preview.colorlib.com/theme/ogani/img/blog/sidebar/sr-1.jpg"
                        alt=""
                      />
                      <div className="p-con">
                        <p>
                          09 Kinds Of Vegetables <br />
                          Protect The Liver
                        </p>
                        <span>MAR 05, 2019</span>
                      </div>
                    </div>
                    <div className="my-card">
                      <img
                        src="https://preview.colorlib.com/theme/ogani/img/blog/sidebar/sr-2.jpg"
                        alt=""
                      />
                      <div className="p-con">
                        <p>
                          Tips You To Balance <br />
                          Nutrition Meal Day
                        </p>
                        <span>MAR 05, 2019</span>
                      </div>
                    </div>
                    <div className="my-card">
                      <img
                        src="https://preview.colorlib.com/theme/ogani/img/blog/sidebar/sr-3.jpg"
                        alt=""
                      />
                      <div className="p-con">
                        <p>
                          4 Principles Help You Lose <br />
                          Weight With Vegetables
                        </p>
                        <span>MAR 05, 2019</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>Search By</h3>
                    <div className="con">
                      <span>Apple</span>
                      <span>Beauty</span>
                      <span>Vegetables</span>
                      <span>Fruit</span>
                      <span>Healthy Food</span>
                      <span>Lifestyle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8" id="my-card">
              <div className="container">
                <div className="row g-5">
                  {CategoryData.map((item) => {
                    return (
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="card-blog">
                          <img src={item.image} alt={item.title} />
                          <p className="first-p">
                            <i className="fa-solid fa-calendar"></i>
                            May 4, 2019
                            <i className="ifa-solid fa-commit"></i>5
                          </p>
                          <h2>{item.title}</h2>
                          <p className="last-p">{item.desc}</p>
                          <button>
                            READ MORE{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
