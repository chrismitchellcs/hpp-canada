import { Box, Stack } from "@mui/material";
import React from "react";

const GeneralInfo = () => {
  return (
    <Stack
      alignItems={"center"}
      pt={{ xs: 4, sm: 4, md: 15 }}
      pb={4}
      spacing={2}
    >
      <Box sx={{ fontSize: "30px", fontWeight: "500" }}>White Papers</Box>
      <Box sx={{ fontSize: "18px" }} width={"60%"} textAlign={"center"}>
        Explore these insightful papers by Hiperbaric, showcasing the diverse
        applications and benefits of high-pressure processing (HPP) for various
        products.
      </Box>
    </Stack>
  );
};

export default GeneralInfo;
