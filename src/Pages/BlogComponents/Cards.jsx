import React from "react";
import CategoryData from "../../Data/CategoryData.json";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const {t} = useTranslation()
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
                      <input type="text" placeholder={t("form.3")} />
                      <i className="fa-solid fa-search"></i>
                    </form>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>{t("blog.0")}</h3>
                    <ul>
                      <li>{t("blog.1")}</li>
                      <li>{t("blog.2")}(20)</li>
                      <li>{t("blog.3")}(5)</li>
                      <li>{t("blog.4")} Style(9)</li>
                      <li>{t("blog.5")}(10)</li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>{t("blog.6")}</h3>
                    <div className="my-card">
                      <img
                        src="https://preview.colorlib.com/theme/ogani/img/blog/sidebar/sr-1.jpg"
                        alt=""
                      />
                      <div className="p-con">
                        <p>
                        {t("blog.7")}
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
                        {t("blog.8")}
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
                        {t("blog.9")}
                        </p>
                        <span>MAR 05, 2019</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <h3>{t("blog.10")}</h3>
                    <div className="con">
                      <span>{t("blog.11")}</span>
                      <span>{t("blog.12")}</span>
                      <span>{t("blog.13")}</span>
                      <span>{t("blog.14")}</span>
                      <span>{t("blog.15")}</span>
                      <span>{t("blog.16")}</span>
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
