import { Box, Stack } from "@mui/material";
import React from "react";
import { HomeImageButton } from "./Buttons";

const Gradient = () => {
  return (
    <Box>
      <Stack
        position={"absolute"}
        sx={{
          width: "80%",
          ml: "auto",
          mr: "auto",
          mt: { xs: "90px", sm: "90px", md: "120px" },
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <Stack spacing={3}>
          <Box
            sx={{
              color: "black",
              fontWeight: "600",
              fontSize: "30px",
              letterSpacing: 0,
            }}
            display={"inline"}
          >
            Our Products
          </Box>
          <Box
            sx={{
              color: "black",
              fontWeight: "400",
              fontSize: "20px",
              letterSpacing: 0,
            }}
            display={"inline"}
          >
            HPP Canada offers a wide range of in-house products, all
            high-pressure processed to enhance freshness, extend shelf life, and
            minimize preservatives. We're always innovating—contact us if you're
            interested in collaborating!
          </Box>
        </Stack>
      </Stack>
      <Box component={"img"} src={"gradient.png"} width={"100%"}></Box>
    </Box>
  );
};

export default Gradient;
