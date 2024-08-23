import { Stack, Box, responsiveFontSizes } from "@mui/material";
import { QuoteButton } from "components/General/Buttons";
import React from "react";

const ContactUs = () => {
  return (
    <Stack
      pt={5}
      pb={5}
      bgcolor={"black"}
      color={"white"}
      alignItems={"center"}
      textAlign={"center"}
      spacing={3}
    >
      <Box sx={{ fontSize: "18px", width: "60%" }}>
        If you have any questions about your packaging's compatibility with HPP,
        feel free to reach out. HPP Canada also offers bottling services for any
        beverages undergoing HPP. Simply supply your product in bulk, and we'll
        return it in ready-to-serve bottles.
      </Box>

      <QuoteButton>Contact Us</QuoteButton>
    </Stack>
  );
};

export default ContactUs;
