import { Stack, Box } from "@mui/material";
import items from "data/items";
import packaging from "data/packaging";
import React from "react";

const AllPackages = () => {
  return (
    <Stack alignItems={"center"} pb={5} pt={5} bgcolor={"#F5F5F5"} spacing={5}>
      <Box sx={{ fontSize: "26px", fontWeight: "450" }}>Packaging Options</Box>
      <Stack spacing={10} width={"80%"}>
        {packaging.map((item) => {
          return (
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Stack alignItems={"center"} width={"20%"} spacing={2}>
                <Box
                  component={"img"}
                  src={item.image}
                  width={"100px"}
                  height={"100px"}
                ></Box>
                <Box
                  sx={{
                    fontSize: "22px",
                    fontWeight: "450",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Box>
              </Stack>

              <Box width={"80%"}>{item.description}</Box>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default AllPackages;
