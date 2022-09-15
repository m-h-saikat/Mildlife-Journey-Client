import React from "react";
import "./Footer.css";
import Logo from "../../../Assets/img/Logo.png";
import Payment from "../../../Assets/img/Payment.png"
const Footer = () => {

  return (
    <div>
      <div className="footer-container text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-center">
                <img src={Logo} alt="" width="150" height="150" />
                <h3>Mildlife Journey</h3>

                <p className="mt-4 ">
                  <small>
                    These statements have not been evaluated by Mildlife Journey.
                  </small>
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="right-footer-container">
                <h3 className="mb-3">Sign up for the newsletter</h3>

                <input
                  className="footer-input text-center"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <button className="btn btn-primary">Subscribe</button>
                <div className="phone d-flex align-items-center justify-content-center mt-5">
                  <div>
                    <h5><i className="fas fa-phone-alt"></i> +88 01580481281
                    </h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center  mt-2 justify-content-center">
                  <div>
                    <p className="mt-2 "><i className="fas fa-map-marker-alt"></i> Dania, Jatrabari, Dhaka -1236
                      .</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-3">
              <div className="left-container text-center mt-2 mx-auto">
                <h3>Pay With</h3>

                <img src={Payment} alt="" width="100%" height="150px" className="mx-auto" />

              </div>
            </div>
          </div>
          <p className="p-2">
            <small>
              &copy;Mildlife Journey . All rights
              reserved,Mildlife Journey-2022
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;