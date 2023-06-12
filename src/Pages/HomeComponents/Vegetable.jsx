import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { useTranslation } from "react-i18next";

const Vegetable = () => {

  const [ul, setUl] = useState(false)

  const opnUl= () =>{
    setUl((value)=> !value)
  }
  const context = useContext(GlobalContext)

  
  const handleChange = (value)=>{
    context.searchValue(value)
  }

  const {t} = useTranslation()

  return (
    <>
      <section id="vegetable">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
              <div className="category-con">
                <div className="title" onClick={opnUl}>
                  <h6>
                    <i className="fa-solid fa-bars"></i> {t("vegetable.dep")}
                  </h6>
                  <i class="fa-solid fa-angle-down"></i>
                </div>

                <ul className={ul? "click" : ''} >
                  <li>{t("vegetable.0")}</li>
                  <li>{t("vegetable.1")}</li>
                  <li>{t("vegetable.2")}</li>
                  <li>{t("vegetable.3")}</li>
                  <li>{t("vegetable.4")}</li>
                  <li>{t("vegetable.5")}</li>
                  <li>{t("vegetable.6")}</li>
                  <li>{t("vegetable.7")}</li>
                  <li>{t("vegetable.8")}</li>
                  <li>{t("vegetable.9")}</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                   <div className="container">
                    <div className="row m-0 p-0">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                   <form>
                        <h5>{t("vegetable.form.0")} <i className="fa-solid fa-angle-down"></i></h5>
                        <input type="text" onChange={(e)=> handleChange(e.target.value)} placeholder={t("vegetable.form.1")} />
                        <button>{t("vegetable.form.2")}</button>
                    </form>
                   </div>
                   <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                   <div className="con">
                   <div className="fa-solid fa-phone"></div>
                    <div className="p-con">
                        <b>+65 11.188.888</b>
                        <span>{t("vegetable.form.3")}</span>
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
