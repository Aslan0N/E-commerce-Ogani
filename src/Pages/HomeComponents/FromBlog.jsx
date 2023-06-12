import React from 'react'
import { useTranslation } from 'react-i18next'

const FromBlog = () => {
    const {t} = useTranslation()
  return (
    <>
        <section id='from-blog'>
        <h2>{t("from-blog.0")}</h2>
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="blog-card">
                            <img src="https://preview.colorlib.com/theme/ogani/img/blog/blog-1.jpg" alt="" />
                            <div className="blog-body">
                                <div className="i-con">
                               <i className="fa-solid fa-calendar"></i> May 4,2019 <i class="fa-regular fa-comment"></i> 5
                                </div>
                                <h5>{t("from-blog.1")}</h5>
                                <p>{t("from-blog.2")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="blog-card">
                            <img src="https://preview.colorlib.com/theme/ogani/img/blog/blog-2.jpg" alt="" />
                            <div className="blog-body">
                                <div className="i-con">
                               <i className="fa-solid fa-calendar"></i> May 4,2019 <i class="fa-regular fa-comment"></i> 5
                                </div>
                                <h5>{t("from-blog.3")}</h5>
                                <p>{t("from-blog.2")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="blog-card">
                            <img src="https://preview.colorlib.com/theme/ogani/img/blog/blog-3.jpg" alt="" />
                            <div className="blog-body">
                                <div className="i-con">
                               <i className="fa-solid fa-calendar"></i> May 4,2019 <i class="fa-regular fa-comment"></i> 5
                                </div>
                                <h5>{t("from-blog.4")}</h5>
                                <p>{t("from-blog.2")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FromBlog