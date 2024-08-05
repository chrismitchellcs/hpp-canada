import NavBar from "components/General/NavBar";
import FAQ from "components/What/FAQ";
import GeneralInfo from "components/What/GeneralInfo";
import Machine from "components/What/Machine";
import React from "react";
import faqs from "data/faqs";
import Footer from "components/General/Footer";
import Hiperbaric from "components/What/Hiperbaric";
import InfoBox from "components/General/InfoBox";

const What = () => {
  return (
    <div>
      <NavBar></NavBar>
      <InfoBox title={"What is High Pressure Processing"}></InfoBox>
      <GeneralInfo></GeneralInfo>
      <Machine></Machine>
      <Hiperbaric></Hiperbaric>
      <FAQ faqs={faqs}></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default What;
