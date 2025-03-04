import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const NavButton = styled(Button)({
  backgroundColor: "transparent",
  color: "black",
  maxHeight: "40px",
  margin: "5px",
  fontSize: "16px",
  fontWeight: "450",
  textTransform: "none",
  fontFamily: "Inter, serif",
  letterSpacing: 0,

  "&:hover": {
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "5px",
    backgroundColor: "transparent",
    color: "black",
  },
});

const ImageButton = styled(Button)({
  backgroundColor: "transparent",
  textTransform: "none",
  color: "black",
  margin: 0,
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
    color: "black",
  },
});

const ImageButtonSmall = styled(Button)({
  backgroundColor: "transparent",
  maxWidth: "100px",

  "&:hover": {
    backgroundColor: "transparent",
    color: "black",
  },
});

const TitleButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "transparent",
  color: "black",
  textAlign: "center",

  margin: "10px",
  fontFamily: "inherit",
  fontSize: "26px",
  fontWeight: "500",
  letterSpacing: "0px",

  "&:hover": {
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "5px",
    backgroundColor: "transparent",
    color: "black",
  },
});

const FooterButton = styled(Button)({
  backgroundColor: "transparent",
  color: "black",
  maxHeight: "40px",
  margin: "2px",
  fontSize: "14px",
  fontWeight: "400",

  "&:hover": {
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "5px",
    backgroundColor: "transparent",
    color: "black",
  },
});

const ContactButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#38ad56",
  color: "white",
  marginLeft: "10px",
  marginRight: "10px",
  padding: "10px",
  paddingLeft: "15px",
  paddingRight: "15px",
  fontSize: "16px",
  fontWeight: "450",
  borderRadius: "100px",
  fontFamily: "Inter, serif",
  letterSpacing: 0,

  "&:hover": {
    //   textDecoration: "underline",
    //   textDecorationThickness: "2px",
    //   textUnderlineOffset: "5px",
    backgroundColor: "#26753a",
    //   color: "black",
  },
});

const AboutButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#38ad56",
  color: "white",
  padding: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
  fontSize: "16px",
  fontWeight: "450",
  borderRadius: "100px",
  fontFamily: "Inter, serif",
  letterSpacing: 0,
  marginTop: "10px",
  "&:hover": {
    backgroundColor: "#26753a",
  },
});

const HomeImageButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#38ad56",
  color: "white",

  padding: "1vw",
  paddingLeft: "1vw",
  paddingRight: "1vw",

  fontWeight: "450",
  borderRadius: "100px",
  fontFamily: "Inter, serif",
  letterSpacing: 0,

  "&:hover": {
    //   textDecoration: "underline",
    //   textDecorationThickness: "2px",
    //   textUnderlineOffset: "5px",
    backgroundColor: "#26753a",
    //   color: "black",
  },
});

const HomeButton = styled(Button)({
  // textTransform: "none",
  backgroundColor: "#38ad56",
  color: "white",

  padding: "10px",
  fontSize: "16px",
  fontWeight: "400",
  maxHeight: "40px",

  "&:hover": {
    //   textDecoration: "underline",
    //   textDecorationThickness: "2px",
    //   textUnderlineOffset: "5px",
    backgroundColor: "#26753a",
    //   color: "black",
  },
});

const QuoteButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#38ad56",
  color: "white",
  marginTop: "20px",
  marginLeft: "10px",
  marginRight: "10px",
  padding: "15px",
  fontSize: "16px",
  fontWeight: "400",
  maxHeight: "40px",
  borderRadius: "15px",
  width: "200px",

  "&:hover": {
    //   textDecoration: "underline",
    //   textDecorationThickness: "2px",
    //   textUnderlineOffset: "5px",
    backgroundColor: "#26753a",
    //   color: "black",
  },
});

const PaperButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#38ad56",
  color: "white",
  marginTop: "30px",

  padding: "15px",
  fontSize: "16px",
  fontWeight: "400",
  maxHeight: "40px",
  borderRadius: "15px",
  width: "200px",

  "&:hover": {
    //   textDecoration: "underline",
    //   textDecorationThickness: "2px",
    //   textUnderlineOffset: "5px",
    backgroundColor: "#26753a",
    //   color: "black",
  },
});

export {
  ContactButton,
  NavButton,
  FooterButton,
  HomeButton,
  QuoteButton,
  TitleButton,
  ImageButton,
  ImageButtonSmall,
  PaperButton,
  AboutButton,
  HomeImageButton,
};
