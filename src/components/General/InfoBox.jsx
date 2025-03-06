import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

const InfoBox = ({ title }) => {
  return (
    <Stack
      alignItems={"center"}
      pt={{ xs: 11, sm: 12, md: 14 }}
      pb={4}
      spacing={2}
    >
      <Box sx={{ fontSize: "30px", fontWeight: "500" }} textAlign={"center"}>
        {title}
      </Box>
    </Stack>
  );
};

export default InfoBox;

// glory juice, las margaritas, nanak , juice truck, pcfp, glory, tractor, avafina organics, body energy club, choices markets, evergreen herbs
