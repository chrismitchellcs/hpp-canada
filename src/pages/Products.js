import Footer from "components/General/Footer";
import Gradient from "components/General/Gradient";

import NavBar from "components/General/NavBar";
import Info from "components/Products/Info";
import AllProducts from "components/Products/Products";

import React from "react";

const Products = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Info></Info>
      <AllProducts></AllProducts>
      <Footer></Footer>
    </div>
  );
};

export default Products;
