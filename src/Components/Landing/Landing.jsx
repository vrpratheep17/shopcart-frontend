import React from "react";
import Jumbotron from "./sub/Jumbotron/Jumbotron";
import Deals from "./sub/Deals/Deals";
import WhyToChoose from "./sub/WhytoChoose/WhyToChoose";
import Footer from "./sub/Footer/Footer";
import Products from "./sub/Products/Products";
const Landing = () => {
  return (
    <div>
      <Jumbotron />
      <div className="container">
        <Deals />
        <Products />
        <WhyToChoose />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
