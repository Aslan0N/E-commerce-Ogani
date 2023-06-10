import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              {/* <img src="https://preview.colorlib.com/theme/ogani/img/logo.png" alt="" /> */}
              <div className="logo"></div>
              <p>Address: 60-49 Road 11378 New York</p>
              <p>Phone: +65 11.188.888</p>
              <p>Email: hello@colorlib.com</p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <h5>Useful Links</h5>
              <ul>
                <li>About Us</li>
                <li>About Our Shop</li>
                <li>Secure Shopping</li>
                <li>Delivery Information</li>
                <li>Privacy Polich</li>
                <li>Our Sitemap</li>
                <li>Who We Are</li>
                <li>Our Services</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Innovation</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <h5 className='join'>Join Our Newsletter Now</h5>
              <p>Get E-mail updates about our latest shop and <br />
               special offers.</p>
               <form>
                <input type="text" placeholder='Enter your email' />
                <button>SUBCRIBE</button>
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