import { Box, Stack } from "@mui/material";
import { TitleButton } from "components/General/Buttons";
import ItemButtons from "components/General/ItemButtons";
import items from "data/items";
import React from "react";

const ItemButtonsHome = () => {
  return (
    <Stack pt={5} pb={5} alignItems={"center"} spacing={1} bgcolor="#F5F5F5">
      <TitleButton>Applications of High Pressure Processing</TitleButton>
      <Box sx={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
        Explore the diverse ways HPP technology enhances food safety, extends
        shelf life, and maintains nutritional quality across various products.
      </Box>
      <ItemButtons items={items}></ItemButtons>
    </Stack>
  );
};

export default ItemButtonsHome;
