import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

const InfoBox = ({ title }) => {
  return (
    <Stack
      spacing={2}
      pb={4}
      sx={{
        pt: 9,
        width: "100%",
        alignItems: "center",
        bgcolor: "#F5F5F5",

        // bgcolor: "black",
        color: "black",
      }}
    >
      <Box
        width={{ xs: "80%", sm: "80%", md: "60%" }}
        sx={{
          fontSize: "30px",
          fontWeight: "500",
          textAlign: "center",
          letterSpacing: "0px",
          color: "#38ad56",
        }}
      >
        {title}
      </Box>
    </Stack>
  );
};

export default InfoBox;

// glory juice, las margaritas, nanak , juice truck, pcfp, glory, tractor, avafina organics, body energy club, choices markets, evergreen herbs
