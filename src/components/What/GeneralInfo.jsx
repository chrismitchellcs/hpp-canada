import { Box, Stack } from "@mui/material";
import React from "react";

const GeneralInfo = () => {
  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      spacing={3}
      mt={3}
      mb={3}
      sx={{ fontSize: "18px", fontWeight: "400" }}
    >
      <Box sx={{ fontSize: "26px", fontWeight: "500" }}>How It Works</Box>
      <Box width={"80%"}>
        High Pressure Processing (HPP), also referred to as high pressure
        pascalization or cold pasteurization, is a preservation technique for
        food and beverages that operates at low temperatures (5ºC – 20ºC). This
        non-thermal method ensures food safety and extends shelf life, all while
        preserving the ideal qualities of fresh products.
      </Box>
      <Box width={"80%"}>
        It relies on the application of high isostatic pressure, up to 6,000 bar
        (600 MPa or 87,000 psi), transmitted by water and maintained for several
        minutes. This pressure is uniformly and instantly distributed throughout
        the product, producing an effect similar to pasteurization but without
        using heat.
      </Box>
      <Box component={"img"} src="diagram.png" width={"60%"} p={5}></Box>
    </Stack>
  );
};

export default GeneralInfo;
