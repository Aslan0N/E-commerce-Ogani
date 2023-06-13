import React from 'react'
import { useTranslation } from 'react-i18next'

const Message = () => {
    const {t} = useTranslation()
  return (
    <>
        <section id='message'>
        <h2>{t("contact.4")}</h2>
            <form>
                <div className="container">
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <input type="text" placeholder={t("contact.5")} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <input type="email" name="" id="" placeholder={t("contact.6")} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <textarea name="" id="" cols="30" rows="5" placeholder={t("contact.7")}></textarea>
                        </div>
                    </div>
                </div>
                <button>{t("contact.8")}</button>
            </form>
        </section>
    </>
  )
}

export default Message