import React from "react";
import  "./WhyToChoose.css";
const WhyToChoose = () => {
  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-center" style={{ fontSize: "3vw" }}>
            {" "}
            Why to Choose us ?
          </div>
          <div class="row icon-boxes">
            <div class="col-md-6 col-lg-3  mb-5 mb-lg-0 text-center">
              <div class="icon-box">
                <div class="icon">
                  <img
                    height="50"
                    src="https://img.icons8.com/carbon-copy/100/000000/free-shipping.png"
                  />
                </div>
                <h4 class="title">
                  <a href="">Free Shipping</a>
                </h4>
                <p class="description">
                  All purchases over $199 are eligible for free shipping via
                  USPS First Class Mail.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
              <div class="icon-box text-center">
                <div class="icon">
                  <img
                    height="50"
                    src="https://img.icons8.com/dotty/80/000000/online-money-transfer.png"
                  />
                </div>
                <h4 class="title">
                  <a href="">Easy Payments</a>
                </h4>
                <p class="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 mb-5 mb-lg-0 text-center">
              <div class="icon-box">
                <div class="icon">
                  <img
                    height="50"
                    src="https://img.icons8.com/wired/64/000000/money.png"
                  />
                </div>
                <h4 class="title">
                  <a href="">Money Back guarantee</a>
                </h4>
                <p class="description">
                  If an item arrived damaged or you've changed your mind, you
                  can send it back for a full refund.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3  mb-5 mb-lg-0 text-center">
              <div class="icon-box">
                <div class="icon">
                  <img
                    height="50"
                    src="https://img.icons8.com/ios/50/000000/warranty-card.png"
                  />
                </div>
                <h4 class="title">
                  <a href="">Finest Quality</a>
                </h4>
                <p class="description">
                  Designed to last, each of our products has been crafted with
                  the finest materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyToChoose;
