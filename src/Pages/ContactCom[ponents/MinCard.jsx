import React from "react";

const MinCard = () => {
  return (
    <>
      <section id="min-card">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="item">
                <i className="fa-solid fa-phone"></i>
                <h3>Phone</h3>
                <p>+01-3-8888-6868</p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="item">
                <i class="fa-solid fa-location-dot"></i>
                <h3>Address</h3>
                <p>60-49 Road 11378 New York</p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="item">
                <i class="fa-regular fa-clock"></i>
                <h3>Open time</h3>
                <p>10:00 am to 23:00 pm</p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="item">
                <i className="fa-solid fa-envelope"></i>
                <h3>Email</h3>
                <p>hello@colorlib.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MinCard;
