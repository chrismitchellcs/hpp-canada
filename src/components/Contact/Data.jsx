import { Box, Stack } from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Data = () => {
  return (
    <Stack alignItems={"center"} width={"100%"}>
      <Stack
        spacing={3}
        ml={2}
        sx={{
          bgcolor: "#F5F5F5",

          p: 5,
          pl: 10,
          pr: 10,
          fontSize: "16px",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={5}>
          <LocationOnOutlinedIcon
            sx={{ fontSize: "35px" }}
          ></LocationOnOutlinedIcon>
          <Box>
            HPP Canada
            <br />
            1668 Fosters Way
            <br />
            Delta, BC
            <br />
            V3M 6S6
          </Box>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={5}>
          <LocalPhoneOutlinedIcon
            sx={{ fontSize: "35px" }}
          ></LocalPhoneOutlinedIcon>
          <Box>(604) 817-1097</Box>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={5}>
          <EmailOutlinedIcon sx={{ fontSize: "35px" }}></EmailOutlinedIcon>
          <Box>patricia@hppcanada.ca</Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Data;
