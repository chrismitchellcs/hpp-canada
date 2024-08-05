import Advantages from "components/Benefits/Advantages";
import Diagram from "components/Benefits/Diagram";
import IndividualAdvantages from "components/Benefits/IndividualAdvantages";
import Footer from "components/General/Footer";
import InfoBox from "components/General/InfoBox";
import NavBar from "components/General/NavBar";
import React from "react";

const Benefits = () => {
  return (
    <div>
      <NavBar></NavBar>
      <InfoBox title={"Benefits of High Pressure Processing"}></InfoBox>
      {/* <Diagram></Diagram> */}
      <Advantages></Advantages>
      <IndividualAdvantages></IndividualAdvantages>
      <Footer></Footer>
    </div>
  );
};

export default Benefits;
