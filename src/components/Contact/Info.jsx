import { Stack, Box } from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Info = () => {
  return (
    <Stack
      direction={"row"}
      pt={10}
      pb={5}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={5}
      sx={{ bgcolor: "white" }}
    >
      <Stack width={"40%"} height={"100%"} alignItems={"center"} spacing={3}>
        <Box component={"img"} src="hpplogo.png" width={"60%"}></Box>
        <Box sx={{ fontSize: "22px", fontWeight: "400", textAlign: "center" }}>
          Contact HPP Canada today to discuss any questions you may have,
          pricing for your product, and how we can transform your product and
          business.
        </Box>
      </Stack>
      {/* <Box
        component={"img"}
        src={"hpplogo.png"}
        sx={{ borderRadius: "10px", width: "30%" }}
      ></Box> */}
      <Stack alignItems={"center"}>
        <Stack
          spacing={3}
          sx={{
            bgcolor: "#F5F5F5",

            p: 5,
            pl: 10,
            pr: 10,
            fontSize: "18px",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={5}>
            <LocationOnOutlinedIcon
              sx={{ fontSize: "35px", color: "#38ad56" }}
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
              sx={{ fontSize: "35px", color: "#38ad56" }}
            ></LocalPhoneOutlinedIcon>
            <Box>(604) 817-1097</Box>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={5}>
            <EmailOutlinedIcon
              sx={{ fontSize: "35px", color: "#38ad56" }}
            ></EmailOutlinedIcon>
            <Box>patricia@hppcanada.ca</Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Info;
