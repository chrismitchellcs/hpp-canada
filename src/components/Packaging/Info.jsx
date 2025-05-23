import { Stack, Box, Typography, Link } from "@mui/material";
import React from "react";

const Info = () => {
  return (
    <Stack
      alignItems={"center"}
      pt={{ xs: 10, sm: 11, md: 13 }}
      pb={4}
      spacing={2}
    >
      <Box sx={{ fontSize: "30px", fontWeight: "500" }}>Packaging</Box>
      <Box
        sx={{ fontSize: "18px" }}
        width={{ xs: "90%", sm: "90%", md: "60%" }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
          In-Pack High Pressure Processing (HPP) is used on pre-packaged food,
          making packaging design crucial. Most HPP packaging is made from
          plastic polymers like PET, PP, PE, PA, or EVOH, with eco-friendly
          options like recycled PET or PLA. Key properties include flexibility,
          elasticity, and water resistance to endure high-pressure compression.
          While HPP handles various food shapes, packaging geometry affects
          throughput, and minimizing headspace reduces the risk of failure.
          Learn more at{" "}
          <Link
            sx={{ color: "#38ad56", textDecorationColor: "#38ad56" }}
            target="_blank"
            href={
              "https://www.hiperbaric.com/en/hpp-technology/hpp-applications/hpp-packaging/"
            }
          >
            Hiperbarics Website
          </Link>
          .
        </Typography>
      </Box>
    </Stack>
  );
};
export default Info;
