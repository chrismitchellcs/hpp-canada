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
      justifyContent={{ xs: "space-between", sm: "space-around" }}
      p={3}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        lineHeight={1}
        color={"black"}
      >
        <Box
          component={"img"}
          src={"hpp-logo.png"}
          width={{ xs: "60px", sm: "80px", md: "80px" }}
        ></Box>
        <Stack spacing={0} textAlign={"center"}>
          <Box
            fontSize={{ xs: "22px", sm: "26px", md: "26px" }}
            fontWeight={"800"}
            // color={"#438fc9"}
          >
            HPP
          </Box>
          <Box
            fontSize={{ xs: "16px", sm: "22px", md: "22px" }}
            fontWeight={"350"}
            // color={"#438fc9"}
          >
            Canada
          </Box>
        </Stack>
      </Stack>
      <Grid container width={"50%"} display={{ xs: "none", md: "flex" }}>
        <Grid item md={4} textAlign={"center"}>
          <NavButton>What is HPP</NavButton>
        </Grid>
        <Grid item md={4} textAlign={"center"}>
          <NavButton>Benefits of HPP</NavButton>
        </Grid>
        <Grid item md={4} textAlign={"center"}>
          <NavButton>White Papers</NavButton>
        </Grid>
        <Grid item md={4} textAlign={"center"}>
          <NavButton> Packaging</NavButton>
        </Grid>
        <Grid item md={4} textAlign={"center"}>
          <NavButton> Our Products</NavButton>
        </Grid>
        <Grid item md={4} textAlign={"center"}>
          <NavButton> Other Services</NavButton>
        </Grid>
      </Grid>
      {/* <Stack
        direction={"column"}
        alignItems={"flex-start"}
        display={{ xs: "none", sm: "block" }}
      >
        <FooterButton href="what">What is HPP</FooterButton>
        <FooterButton href="benefits">Benefits of HPP</FooterButton>
        <FooterButton href="packaging">Packaging</FooterButton>
        <FooterButton href="whitepapers">White Papers</FooterButton>
      </Stack> */}
      <Stack
        spacing={2}
        sx={{ fontSize: "14px", fontWeight: "400", color: "black" }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <LocationOnOutlinedIcon
            sx={{ fontSize: "30px", color: "#38ad56" }}
          ></LocationOnOutlinedIcon>
          <Box>
            8188 River Way
            <br /> Delta, BC V4G 1K5
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
