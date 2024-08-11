import { Stack, Box, Typography, Link } from "@mui/material";
import React from "react";

const Info = () => {
  return (
    <Stack width={"100%"} alignItems={"center"} spacing={3} mt={3} mb={3}>
      <Box width={"80%"} sx={{ whiteSpace: "pre-wrap" }}>
        <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
          In-Pack High Pressure Processing (HPP) is used on pre-packaged food,
          making packaging design crucial. Most HPP packaging is made from
          plastic polymers like PET, PP, PE, PA, or EVOH, with eco-friendly
          options like recycled PET or PLA also suitable.<br></br>
          <br></br>Key properties include flexibility, elasticity, and water
          resistance to endure and recover from high-pressure compression. HPP's
          uniform pressure transmission allows for processing various food
          shapes and sizes, but packaging geometry affects throughput. <br></br>
          <br></br>Minimizing headspace reduces packaging failure risk, as gas
          expands more violently than solids or liquids under pressure.{" "}
          <br></br>
          <br></br>More information can be found at{" "}
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
