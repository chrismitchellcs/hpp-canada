import { Box, Stack } from "@mui/material";
import { NavButton, TitleButton } from "components/General/Buttons";
import React from "react";

const Hiperbaric = () => {
  return (
    <Stack alignItems={"center"} mt={3} mb={3}>
      <Box component={"img"} src="Hiperbaric__Logo.jpg" width={"30%"}></Box>
      <NavButton>More Information on Hiperbaric Website</NavButton>
    </Stack>
  );
};

export default Hiperbaric;
