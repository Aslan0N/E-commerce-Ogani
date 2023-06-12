import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import { useTranslation } from 'react-i18next';

const CtegoryButton = () => {
    const context = useContext(GlobalContext)
    const {t} = useTranslation()
  return (
    <>
       <section id='btn-category'>
       <h1>{t("category-btn.0")}</h1>
        <div className="btn-con">
          {context.category.map((item, index) => {
            return (
              <button
                className="btn-category"
                key={index}
                onClick={() => context.myFilter(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
       </section>
    </>
  )
}

export default CtegoryButton