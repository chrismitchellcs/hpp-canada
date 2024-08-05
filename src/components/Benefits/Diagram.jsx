import { Box, Stack } from "@mui/material";
import React from "react";

const Diagram = () => {
  return (
    <Stack width={"100%"} alignItems={"center"} pt={3} pb={3}>
      <Box component={"img"} src={"hpp circle.png"} width={"50%"}></Box>
    </Stack>
  );
};

export default Diagram;
