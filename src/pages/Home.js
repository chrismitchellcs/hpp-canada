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
import AboutUs from "components/Home/AboutUs";
import Products from "components/Home/Products";
import OtherServices from "components/Home/OtherServices";
import Relocation from "components/Home/Relocation";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <InfoBox></InfoBox>

      <AboutUs></AboutUs>
      <Relocation></Relocation>
      {/* <LogoSlider></LogoSlider> */}
      {/* <RecognizedBy></RecognizedBy> */}
      <ImageInfo></ImageInfo>
      {/* <HowInfo></HowInfo> */}
      <LogoSlider></LogoSlider>
      <ItemButtonsHome></ItemButtonsHome>

      {/* <PackagingButtons items={packaging}></PackagingButtons> */}
      <Products></Products>
      <OtherServices></OtherServices>
      <RecognizedBy></RecognizedBy>
      <Quote></Quote>

      <Footer></Footer>
    </div>
  );
};

export default Home;
