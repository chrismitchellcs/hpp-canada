import Footer from "components/General/Footer";
import InfoBox from "components/General/InfoBox";
import NavBar from "components/General/NavBar";
// @ts-ignore
import Info from "components/Packaging/Info";
import Package from "components/Packaging/Package";
import Packages from "components/Packaging/Packages";

import React from "react";

const Packaging = () => {
  return (
    <div>
      <NavBar></NavBar>
      <InfoBox title={"Packaging"}></InfoBox>
      <Info></Info>
      <Packages></Packages>
      <Footer></Footer>
    </div>
  );
};

export default Packaging;
