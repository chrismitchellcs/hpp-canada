import { Box, Stack } from "@mui/material";
import React from "react";

const RecognizedBy = () => {
  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      pt={5}
      pb={{ xs: 5, sm: 5, md: 0 }}
      bgcolor={"#F5F5F5"}
    >
      <Box
        sx={{ fontSize: "18px", fontWeight: "400" }}
        width={"80%"}
        textAlign={"center"}
      >
        RECOGNIZED BY HEALTH CANADA AND THE FDA
      </Box>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"80%"}
      >
        <Box
          component={"img"}
          src={"healthcanada.webp"}
          width={{ xs: "50%", sm: "50%", md: "30%" }}
        ></Box>
        <Box
          component={"img"}
          src={"fda.png"}
          width={{ xs: "38%", sm: "38%", md: "25%" }}
          height={"200%"}
        ></Box>
      </Stack>
    </Stack>
  );
};

export default RecognizedBy;
