import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { ContactButton, QuoteButton } from "../General/Buttons";

const Quote = () => {
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      pt={5}
      pb={5}
      bgcolor={"black"}
      color={"white"}
      spacing={2}
    >
      <Box component={"img"} src={"hpplogonotext.png"} width={"100px"}></Box>
      <Box sx={{ fontSize: "30px", fontWeight: "600" }}>
        Partner with HPP Canada Today
      </Box>
      <Box
        sx={{
          fontSize: "18px",
          fontWeight: "400",
          width: "80%",
        }}
      >
        Discover how our High Pressure Processing solutions can elevate your
        business. Contact us now to learn more!
      </Box>
      <Box m={1}>
        <QuoteButton href="contact">Get a Quote</QuoteButton>
      </Box>
    </Stack>
  );
};

export default Quote;
