import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

const InfoBox = () => {
  return (
    <Stack
      spacing={2}
      pb={5}
      sx={{
        pt: 10,
        width: "100%",
        alignItems: "center",
        // bgcolor: "#F5F5F5",
        bgcolor: "black",
        color: "white",
      }}
    >
      <Box sx={{ fontSize: "20px", fontWeight: "500" }}>
        HIGH PRESSURE PROCESSING CANADA
      </Box>
      <Box
        width={{ xs: "80%", sm: "80%", md: "60%" }}
        sx={{
          fontSize: "40px",
          fontWeight: "500",
          textAlign: "center",
          letterSpacing: "0px",
        }}
      >
        Boost Your Product's Shelf Life and Quality with
        <Typography
          sx={{ fontSize: "40px", fontWeight: "500", color: "#38ad56" }}
        >
          High Pressure Processing
        </Typography>
      </Box>
      <Box sx={{ fontSize: "20px", fontWeight: "400" }}>
        Based in Vancouver, Canada
      </Box>
    </Stack>
  );
};

export default InfoBox;

// glory juice, las margaritas, nanak , juice truck, pcfp, glory, tractor, avafina organics, body energy club, choices markets, evergreen herbs
