import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Image from "mui-image";
import { Button, Stack, styled } from "@mui/material";
import {
  NavButton,
  ContactButton,
  ImageButton,
} from "components/General/Buttons";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function NavBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar
            sx={{
              bgcolor: "white",
            }}
          >
            <Stack flexGrow={1} m={1}>
              <ImageButton href="/">
                <Box
                  component={"img"}
                  src={"hpplogo.png"}
                  width={"200px"}
                ></Box>
              </ImageButton>
            </Stack>
            <NavButton href="what">What is HPP</NavButton>
            <NavButton href="benefits">Benefits of HPP</NavButton>
            <NavButton href="packaging">Packaging</NavButton>
            <NavButton href="validation">Validation Studies</NavButton>
            <ContactButton href="contact">CONTACT US</ContactButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
