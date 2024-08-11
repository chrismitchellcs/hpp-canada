import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

const ImageInfo = () => {
  return (
    <Stack
      direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
      pt={5}
      pb={5}
      spacing={5}
      justifyContent={"space-around"}
      alignItems={"center"}
      //   sx={{ bgcolor: "#F5F5F5" }}
      sx={{ bgcolor: "white" }}
    >
      <Stack
        width={{ xs: "80%", sm: "80%", md: "40%" }}
        height={"100%"}
        justifyContent={"center"}
      >
        <Box
          textAlign={{ xs: "center", sm: "center", md: "inherit" }}
          sx={{ fontSize: "26px", fontWeight: "500", mb: 5 }}
          ml={{ xs: 0, sm: 0, md: 3 }}
        >
          The Only Tolling HPP Machine in BC
        </Box>
        <Box sx={{ fontSize: "18px", fontWeight: "400" }}>
          <ul style={{ marginLeft: "0px" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>Healthier Products:</strong> HPP maintains the nutritional
              value of the original product, keeping your label clean and
              increasing customer satisfaction.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Longer Shelf Life:</strong> Extended product shelf-life
              reduces lost revenue and increases yields as well as customer
              satisfaction.
            </li>
            <li>
              <strong>Fresh Taste Maintained:</strong> Processing with pressure
              instead of thermal and chemical treatments maintains the quality
              and original flavor and texture of your product.
            </li>
          </ul>
        </Box>
      </Stack>
      <Box
        component={"img"}
        src={"hpp-machine.jpg"}
        sx={{ borderRadius: "10px" }}
        width={{ xs: "80%", sm: "80%", md: "40%" }}
      ></Box>
    </Stack>
  );
};

export default ImageInfo;
