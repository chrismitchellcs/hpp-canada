import { Box, Stack } from "@mui/material";
import Line from "components/General/Line";
import items from "data/items";
import React from "react";

const IndiviualBenefits = () => {
  return (
    <Stack alignItems={"center"} pb={5} pt={5} bgcolor={"#F5F5F5"} spacing={5}>
      <Box sx={{ fontSize: "26px", fontWeight: "450" }}>
        Benefits for Common Items
      </Box>
      <Stack spacing={5} width={"80%"}>
        {items.map((item) => {
          return (
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Stack alignItems={"center"} width={"20%"} spacing={1}>
                <Box
                  component={"img"}
                  src={item.icon}
                  width={"100px"}
                  height={"100px"}
                ></Box>
                <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
                  {item.name}
                </Box>
              </Stack>

              <Box width={{ xs: "100%", sm: "100%", md: "80%" }}>
                {item.description}
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default IndiviualBenefits;
