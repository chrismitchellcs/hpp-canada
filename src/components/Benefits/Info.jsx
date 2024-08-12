import { Stack } from "@mui/material";
import React from "react";

const Info = () => {
  return (
    <Stack alignItems={"center"} textAlign={"center"} pt={5}>
      <Stack width={"80%"} sx={{ fontSize: "18px", lineHeight: "1.75" }}>
        High Pressure Processing (HPP) revolutionizes food safety and quality by
        using extreme pressure to eliminate harmful pathogens while preserving
        the natural flavor, texture, and nutrients of food. This cutting-edge
        technology extends shelf life without the need for artificial
        preservatives, maintaining the fresh taste consumers love. HPP also
        caters to health-conscious and environmentally aware individuals, as it
        reduces waste and retains more vitamins, minerals, and enzymes compared
        to traditional methods.
      </Stack>
    </Stack>
  );
};

export default Info;
