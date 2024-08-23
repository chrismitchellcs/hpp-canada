import { Box } from "@mui/material";
import Footer from "components/General/Footer";
import HowInfo from "components/Home/HowInfo";
import ImageInfo from "components/Home/ImageInfo";
import InfoBox from "components/Home/InfoBox";

import LogoSlider from "components/Home/LogoSlider";
import NavBar from "components/General/NavBar";
import PackagingButtons from "components/Home/PackagingButtons";
import Quote from "components/Home/Quote";
import RecognizedBy from "components/Home/RecognizedBy";
import items from "data/items";
import packaging from "data/packaging";
import React from "react";
import ItemButtonsHome from "components/Home/ItemButtonsHome";
import Line from "components/General/Line";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <InfoBox></InfoBox>
      <ImageInfo></ImageInfo>
      <LogoSlider></LogoSlider>
      <HowInfo></HowInfo>
      <ItemButtonsHome></ItemButtonsHome>

      <PackagingButtons items={packaging}></PackagingButtons>

      <RecognizedBy></RecognizedBy>
      <Quote></Quote>

      <Footer></Footer>
    </div>
  );
};

export default Home;
