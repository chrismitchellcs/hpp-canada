import { Box, Button, Fade, Stack, styled } from "@mui/material";

import React, { useEffect, useState } from "react";

const ServiceButton = styled(Button)({
  backgroundColor: "transparent",
  color: "#555555",
  maxHeight: "40px",

  fontSize: "20px",
  fontWeight: "550",
  textTransform: "none",
  fontFamily: "Inter, serif",
  letterSpacing: 0,
  textDecoration: "underline",
  textDecorationThickness: "2px",
  textUnderlineOffset: "10px",
  padding: 0,
  "&:hover": {
    color: "#38ad56",
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "10px",
    backgroundColor: "transparent",
  },
});

const ServiceButtonSelected = styled(Button)({
  backgroundColor: "transparent",
  color: "#38ad56",
  maxHeight: "40px",

  fontSize: "20px",
  fontWeight: "550",
  textTransform: "none",
  fontFamily: "Inter, serif",
  letterSpacing: 0,
  textDecoration: "underline",
  textDecorationThickness: "2px",
  textUnderlineOffset: "10px",
  padding: 0,
  "&:hover": {
    color: "#38ad56",
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "10px",
    backgroundColor: "transparent",
  },
});

const AboutButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#38ad56",
  color: "white",
  padding: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
  fontSize: "16px",
  fontWeight: "450",
  borderRadius: "100px",
  fontFamily: "Inter, serif",
  letterSpacing: 0,
  marginTop: "10px",
  "&:hover": {
    backgroundColor: "#26753a",
  },
});

const AboutUs = () => {
  const [showTolling, setShowTolling] = useState(true);
  const [showProducts, setShowProducts] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const sel = e.target.id;
    if (sel === "tolling") {
      setShowProducts(false);
      setShowServices(false);
      setShowTolling(true);
    } else if (sel === "products") {
      setShowTolling(false);
      setShowServices(false);
      setShowProducts(true);
    } else {
      setShowTolling(false);
      setShowProducts(false);
      setShowServices(true);
    }
  };

  return (
    <Stack
      pt={5}
      pb={5}
      alignItems={"center"}
      sx={{ bgcolor: "#F5F5F5" }}
      spacing={4}
    >
      <Stack
        width={{ xs: "90%", md: "75%" }}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <Stack direction={"row"} spacing={3}>
          {showTolling ? (
            <ServiceButtonSelected onClick={handleClick} id="tolling">
              HPP Tolling
            </ServiceButtonSelected>
          ) : (
            <ServiceButton onClick={handleClick} id="tolling">
              HPP Tolling
            </ServiceButton>
          )}
          {/* <ServiceButton onClick={handleClick} id="tolling">
            HPP Tolling
          </ServiceButton> */}
          {showProducts ? (
            <ServiceButtonSelected onClick={handleClick} id="products">
              Products
            </ServiceButtonSelected>
          ) : (
            <ServiceButton onClick={handleClick} id="products">
              Products
            </ServiceButton>
          )}
          {showServices ? (
            <ServiceButtonSelected onClick={handleClick} id="services">
              Services
            </ServiceButtonSelected>
          ) : (
            <ServiceButton onClick={handleClick} id="services">
              Services
            </ServiceButton>
          )}
        </Stack>
      </Stack>
      <Box width={"75%"}>
        {showTolling && (
          <Fade in={showTolling} timeout={1500}>
            <Stack spacing={2}>
              <Box sx={{ fontSize: "30px", fontWeight: "600" }}>
                Safer Food, Fresher Taste, Longer Shelf Life
              </Box>
              <Box
                sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}
              >
                High Pressure Processing (HPP) guarantees food safety by
                eliminating pathogens while preserving the fresh taste and
                nutritional value of your products. Enjoy minimally processed
                foods with an extended shelf life of up to 30x, all without
                compromising quality!
              </Box>
              <Box>
                <AboutButton>Learn More</AboutButton>
              </Box>
            </Stack>
          </Fade>
        )}
        {showProducts && (
          <Fade in={showProducts} timeout={1500}>
            <Stack spacing={2}>
              <Box sx={{ fontSize: "30px", fontWeight: "600" }}>
                Discover Our Product Line of HPP-Treated Items
              </Box>
              <Box
                sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}
              >
                We offer a variety of HPP-treated products, including citrus
                juices, blueberry and cranberry juices, vegan meat, cold brew
                coffee, and protein drinks — all safe, fresh, and long-lasting.
              </Box>
              <Box>
                <AboutButton>See The Products</AboutButton>
              </Box>
            </Stack>
          </Fade>
        )}
        {showServices && (
          <Fade in={showServices} timeout={1500}>
            <Stack spacing={2}>
              <Box sx={{ fontSize: "30px", fontWeight: "600" }}>
                We Offer Bottling, Juicing, and Co-Packing Services
              </Box>
              <Box
                sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}
              >
                We provide expert bottling, juicing, and co-packing services to
                help bring your products to market with quality and efficiency.
                From fresh juices to packaged goods, our solutions ensure
                safety, freshness, and seamless production every step of the
                way.
              </Box>
              <Box>
                <AboutButton>See Our Services</AboutButton>
              </Box>
            </Stack>
          </Fade>
        )}
      </Box>
    </Stack>
  );
};

export default AboutUs;
