import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { ContactButton, QuoteButton } from "../General/Buttons";

const Quote = () => {
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={5}
      pb={5}
      bgcolor={"black"}
      color={"white"}
      spacing={0}
    >
      <Box component={"img"} src={"hpplogonotext.png"} width={"100px"}></Box>
      <Box
        sx={{
          fontSize: "40px",
          fontWeight: "500",
        }}
      >
        Partner with HPP Canada Today
      </Box>
      <Box>
        Discover how our High Pressure Processing solutions can elevate your
        business. Contact us now to learn more!
      </Box>
      <QuoteButton>Get a Quote</QuoteButton>
    </Stack>
  );
};

export default Quote;
