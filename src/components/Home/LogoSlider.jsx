import { Box, Stack } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    centerMode: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
  };
  return (
    <Stack width={"100%"} alignItems={"center"} spacing={5} mt={5} mb={5}>
      <Box sx={{ fontSize: "20px", fontWeight: "400" }}>
        TRUSTED BY PREMIUM FOOD MANUFACTURERS
      </Box>
      <Box width={"80%"}>
        <Slider {...settings}>
          <div className="container">
            <img src="logos/bec.jpg" width={"100px"} />
          </div>
          <div className="container">
            <img src="logos/choices.jpg" width={"100px"} />
          </div>
          <div className="container">
            <img src="logos/evergreen.jpg" width={"100px"} />
          </div>
          <div className="container">
            <img src="logos/glory.jpg" width={"100px"} />
          </div>
          <div className="container">
            <img src="logos/thejuicetruck.jpg" width={"70px"} />
          </div>
          <div className="container">
            <img src="logos/nanak.jpg" width={"100px"} />
          </div>
          <div className="container">
            <img src="logos/tractor.jpg" width={"100px"} />
          </div>
        </Slider>
      </Box>
    </Stack>
  );
};

export default LogoSlider;
