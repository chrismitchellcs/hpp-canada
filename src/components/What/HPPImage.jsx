import { Stack, Box } from "@mui/material";
import React from "react";

const HPPImage = () => {
  return (
    <Stack alignItems={"center"} pt={5}>
      <Box
        component={"img"}
        src={"barrels.jpg"}
        width={"60%"}
        borderRadius={"10px"}
      ></Box>
    </Stack>
  );
};

export default HPPImage;
