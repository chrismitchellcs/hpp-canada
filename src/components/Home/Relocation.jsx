import { Box, Button, Fade, Stack, styled } from "@mui/material";

import React, { useEffect, useState } from "react";

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

const Relocation = () => {
  return (
    <Stack
      pt={5}
      pb={5}
      alignItems={"center"}
      sx={{ bgcolor: "white" }}
      spacing={4}
    >
      <Box sx={{ fontSize: "30px", fontWeight: "600" }}>
        HPP Canada is Moving!
      </Box>
      <Box
        width={"75%"}
        sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}
      >
        We are excited to share that we are relocating to a larger facility to
        better serve you! Starting in April 2025, our new address will be:
      </Box>
      <Stack width={"75%"} spacing={1} alignItems={"center"}>
        <Box sx={{ fontSize: "30px", fontWeight: "600", color: "#38ad56" }}>
          8188 River Way, Delta, BC
        </Box>
        <Box sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}>
          (Approximately 10 minutes from our current location)
        </Box>
      </Stack>
      <Box
        width={"75%"}
        sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}
      >
        During this transition, our HPP equipment will be unavailable from March
        29 to April 12, 2025. We will do our utmost to accommodate your needs
        during this period and are exploring options to access another HPP
        machine for emergency processing.
      </Box>
    </Stack>
  );
};

export default Relocation;
