import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t} = useTranslation()
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              {/* <img src="https://preview.colorlib.com/theme/ogani/img/logo.png" alt="" /> */}
              <div className="logo"></div>
              <p>{t("footer.0")}</p>
              <p>{t("footer.1")}</p>
              <p>Email: hello@colorlib.com</p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <h5>{t("footer.2")}</h5>
              <ul>
                <li>{t("footer.3")}</li>
                <li>{t("footer.4")}</li>
                <li>{t("footer.5")}</li>
                <li>{t("footer.6")}</li>
                <li>{t("footer.7")}</li>
                <li>{t("footer.8")}</li>
                <li>{t("footer.9")}</li>
                <li>{t("footer.10")}</li>
                <li>{t("footer.11")}</li>
                <li>{t("footer.12")}</li>
                <li>{t("footer.13")}</li>
                <li>{t("footer.14")}</li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <h5 className='join'>{t("footer.15")}</h5>
              <p>{t("footer.16")}</p>
               <form>
                <input type="text" placeholder={t("footer.17")} />
                <button>{t("footer.18")}</button>
               </form>
               <div className="i-con">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-pinterest"></i>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer