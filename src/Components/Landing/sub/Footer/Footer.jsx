import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div class="footer-top mt-4">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact text-center">
                <h3>Shop Cart</h3>
                <p>
                  Chennai
                  <br />
                  Tamil Nadu
                  <br />
                  India <br />
                  <br />
                  <strong>Phone:</strong> +91 9597908587
                  <br />
                  <strong>Email:</strong> vrpratheep22@gmail.com
                  <br />
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links"></div>

              <div class="col-lg-3 col-md-6 footer-links"></div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Subscribe to our newsletter and receive exclusive offers every
                  week
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container  py-4">
          <div class=" text-center ">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Shop Cart</span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits">
              Designed by{" "}
              <a href="https://www.linkedin.com/in/pratheep-vr/">Pratheep VR</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
