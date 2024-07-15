import { Box, Stack } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ContactButton, TitleButton } from "../General/Buttons";

const HowInfo = () => {
  return (
    <Stack pt={5} alignItems={"center"} spacing={1} sx={{ bgcolor: "#F5F5F5" }}>
      {/* <Box sx={{ fontSize: "30px", fontWeight: "500", textAlign: "center" }}>
        How High Pressure Processing Works
      </Box> */}
      <TitleButton>How High Pressure Processing Works</TitleButton>
      <Box
        sx={{ fontSize: "16px", fontWeight: "400", textAlign: "center", pb: 2 }}
      >
        Discover the science behind HPP technology and understand how it ensures
        food safety and quality without the need for preservatives.
      </Box>
      <Box component={"img"} src="diagram.png" width={"60%"}></Box>

      {/* <Stack
        direction={"row"}
        alignItems={"center"}
        height={"250px"}
        justifyContent={"center"}
      >
        <Box
          sx={{
            p: 2,
            width: "400px",
            bgcolor: "white",
            borderRadius: "15px",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          Your sealed products are loaded into the Hiperbaric HC300's
          high-pressure chamber by the team at HPP Canada.
        </Box>
        <ArrowForwardIcon sx={{ fontSize: "40px" }}></ArrowForwardIcon>
        <Box
          sx={{
            p: 2,
            width: "400px",
            bgcolor: "white",
            borderRadius: "15px",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          The chamber is filled with water, and high pressure (up to 600
          MPa/87,000 psi) is applied uniformly, inactivating pathogens and
          spoilage microorganisms without heat, chemicals, or preservatives.
        </Box>
        <ArrowForwardIcon sx={{ fontSize: "40px" }}></ArrowForwardIcon>
        <Box
          sx={{
            p: 2,
            width: "400px",
            bgcolor: "white",
            borderRadius: "15px",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          After the pressurization cycle is complete, the chamber is
          depressurized, and the water is drained. The treated packages are
          unloaded, inspected, and ready for distribution, maintaining the
          product's freshness, quality, and extended shelf life.
        </Box>
      </Stack> */}
      {/* <Box component={"img"} src={"diagram.png"} width={"70%"}></Box> */}
    </Stack>
  );
};

export default HowInfo;
