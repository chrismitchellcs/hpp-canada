import { Box, Stack } from "@mui/material";
import React from "react";

const Machine = () => {
  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      spacing={3}
      mt={3}
      mb={3}
      sx={{ fontSize: "18px", fontWeight: "400" }}
    >
      <Box sx={{ fontSize: "26px", fontWeight: "500" }}>Our Machine</Box>
      <Box width={"80%"}>
        HPP Canada uses the H300 by Hiperbaric, a game-changer in the HPP
        industry. As one of the fastest HPP machines in the world, the H300
        allows us to return your product to you in minimal time. Its 300L vessel
        is capable of processing 2,400 kg of a wide range of food and beverage
        products each hour.
      </Box>

      <Box component={"img"} src="1.3-H300 copy.png" width={"60%"}></Box>
    </Stack>
  );
};

export default Machine;
