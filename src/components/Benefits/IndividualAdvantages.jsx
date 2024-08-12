import { Box, Stack } from "@mui/material";
import ItemButtons from "components/General/ItemButtons";
import items from "data/items";
import React from "react";

const IndividualAdvantages = () => {
  return (
    <Stack pt={5} pb={5} alignItems={"center"} spacing={1} bgcolor="#E7F2DA">
      <Box
        sx={{
          fontSize: "26px",
          fontWeight: "500",
          width: "80%",
          textAlign: "center",
        }}
      >
        Advantages of HPP for Common Items
      </Box>
      <ItemButtons items={items}></ItemButtons>
    </Stack>
  );
};

export default IndividualAdvantages;
