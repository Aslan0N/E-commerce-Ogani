import React from "react";
import { useTranslation } from "react-i18next";

const VegetableImg = () => {
  const {t}= useTranslation()
  return (
    <>
      <section id="veg-img">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-9">
              <div className="img">
                <span>{t("veg-img.0")}</span>
                <h1>
                {t("veg-img.1")}
                </h1>
                <p>{t("veg-img.2")}</p>
                <button>{t("veg-img.3")}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VegetableImg;
