import { Box, Stack } from "@mui/material";
import { AboutButton, TitleButton } from "components/General/Buttons";
import ItemButtons from "components/General/ItemButtons";
import items from "data/items";
import React from "react";

const ItemButtonsHome = () => {
  return (
    <Stack pt={5} pb={5} alignItems={"center"} spacing={1} bgcolor="#F5F5F5">
      {/* <TitleButton href="benefits">
        Applications of High Pressure Processing
      </TitleButton> */}
      {/* <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={4}
      >
        <Box sx={{ fontSize: "30px", fontWeight: "600" }}>
          Applications of High Pressure Processing
        </Box>
        <AboutButton>Learn More</AboutButton>
      </Stack> */}
      {/* <Box
        sx={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}
        width={"80%"}
      >
        Explore the diverse ways HPP technology enhances food safety, extends
        shelf life, and maintains nutritional quality across various products.
      </Box> */}
      <Box
        width={"90%"}
        textAlign={"center"}
        sx={{ fontSize: "30px", fontWeight: "600" }}
      >
        Common HPP Applications
      </Box>
      <ItemButtons items={items}></ItemButtons>
    </Stack>
  );
};

export default ItemButtonsHome;
