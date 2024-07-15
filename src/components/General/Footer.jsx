import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { FooterButton, NavButton } from "./Buttons";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined";

const Footer = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
      p={3}
    >
      <Box component={"img"} src={"hpplogo.png"} width={"300px"}></Box>
      {/* <Grid container width={"30%"}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <NavButton>What is HPP</NavButton>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <NavButton>Benefits of HPP</NavButton>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <NavButton>Packaging</NavButton>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <NavButton>Validation Studies</NavButton>
        </Grid>
      </Grid> */}
      <Stack>
        <FooterButton>What is HPP</FooterButton>
        <FooterButton>Benefits of HPP</FooterButton>
        <FooterButton>Packaging</FooterButton>
        <FooterButton>Validation Studies</FooterButton>
      </Stack>
      <Stack
        spacing={2}
        sx={{ fontSize: "16px", fontWeight: "400", color: "black" }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <LocationOnOutlinedIcon
            sx={{ fontSize: "30px", color: "#38ad56" }}
          ></LocationOnOutlinedIcon>
          <Box>
            1668 Fosters Way
            <br /> Delta, BC V3M 6S6
          </Box>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <EmailOutlinedIcon
            sx={{ fontSize: "30px", color: "#38ad56" }}
          ></EmailOutlinedIcon>
          <Box>patricia@hppcanada.ca</Box>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <LocalPhoneOutlinedIcon
            sx={{ fontSize: "30px", color: "#38ad56" }}
          ></LocalPhoneOutlinedIcon>
          <Box>604-817-1097</Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
