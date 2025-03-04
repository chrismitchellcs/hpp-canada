import Footer from "components/General/Footer";

import NavBar from "components/General/NavBar";
import OtherServices from "components/Services/OtherServices";
import ServicesImage from "components/Services/ServicesImage";

import React from "react";

const Services = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ServicesImage></ServicesImage>
      <OtherServices></OtherServices>
      <Footer></Footer>
    </div>
  );
};

export default Services;
