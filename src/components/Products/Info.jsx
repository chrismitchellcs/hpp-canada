import { Stack, Box, Typography, Link } from "@mui/material";
import React from "react";

const Info = () => {
  return (
    <Stack
      alignItems={"center"}
      pt={{ xs: 11, sm: 12, md: 14 }}
      pb={4}
      spacing={2}
      bgcolor={"#F5F5F5"}
    >
      <Box sx={{ fontSize: "30px", fontWeight: "500" }}>Our Products</Box>
      <Box
        sx={{ fontSize: "18px" }}
        width={{ xs: "90%", sm: "90%", md: "60%" }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
          HPP Canada offers a wide range of in-house products, all high-pressure
          processed to enhance freshness, extend shelf life, and minimize
          preservatives. We're always innovating—contact us if you're interested
          in collaborating!
        </Typography>
      </Box>
    </Stack>
  );
};
export default Info;
