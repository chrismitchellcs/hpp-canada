import Footer from "components/General/Footer";
import InfoBox from "components/General/InfoBox";
import NavBar from "components/General/NavBar";
import GeneralInfo from "components/WhitePapers/GeneralInfo";
import Papers from "components/WhitePapers/Papers";
import React from "react";

const WhitePapers = () => {
  return (
    <div>
      <NavBar></NavBar>
      {/* <InfoBox title={"White Papers"}></InfoBox> */}
      <GeneralInfo></GeneralInfo>
      <Papers></Papers>
      <Footer></Footer>
    </div>
  );
};

export default WhitePapers;
