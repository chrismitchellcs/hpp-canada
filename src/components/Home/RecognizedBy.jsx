import { Box, Stack } from "@mui/material";
import React from "react";

const RecognizedBy = () => {
  return (
    <Stack width={"100%"} alignItems={"center"} pt={5} bgcolor={"#F5F5F5"}>
      <Box sx={{ fontSize: "20px", fontWeight: "400" }}>
        RECOGNIZED BY HEALTH CANADA AND THE FDA
      </Box>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"80%"}
      >
        <Box component={"img"} src={"healthcanada.webp"} width={"300px"}></Box>
        <Box
          component={"img"}
          src={"fda.png"}
          width={"300px"}
          height={"60px"}
        ></Box>
      </Stack>
    </Stack>
  );
};

export default RecognizedBy;
