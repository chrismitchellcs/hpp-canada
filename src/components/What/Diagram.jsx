import { Stack, Box } from "@mui/material";
import React from "react";

const Diagram = () => {
  return (
    <Stack alignItems={"center"} mb={5} mt={5}>
      <Box
        component={"img"}
        src={"diagram.png"}
        width={{ xs: "90%", sm: "90%", md: "60%" }}
      ></Box>
    </Stack>
  );
};

export default Diagram;
