import { Box, Stack } from "@mui/material";
import { NavButton, TitleButton } from "components/General/Buttons";
import React from "react";

const Hiperbaric = () => {
  return (
    <Stack alignItems={"center"} mt={3} mb={3} spacing={3}>
      <Box
        component={"img"}
        src="Hiperbaric__Logo.jpg"
        width={{ xs: "50%", sm: "50%", md: "30%" }}
      ></Box>
      <NavButton>More Information on Hiperbaric Website</NavButton>
    </Stack>
  );
};

export default Hiperbaric;
