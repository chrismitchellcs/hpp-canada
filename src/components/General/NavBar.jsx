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
import { Button, Menu, MenuItem, Stack, styled } from "@mui/material";
import {
  NavButton,
  ContactButton,
  ImageButton,
  ImageButtonSmall,
} from "components/General/Buttons";
import MenuIcon from "@mui/icons-material/Menu";

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

function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    const page = e.target.id;
    window.location.href = page;
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "black" }}
      >
        <MenuIcon></MenuIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} id="what">
          What is HPP
        </MenuItem>
        <MenuItem onClick={handleClose} id="benefits">
          Benefits of HPP
        </MenuItem>
        <MenuItem onClick={handleClose} id="packaging">
          Packaging
        </MenuItem>
        <MenuItem onClick={handleClose} id="validation">
          Validation Studies
        </MenuItem>
      </Menu>
    </div>
  );
}

export default function NavBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{}}>
          <Toolbar
            sx={{
              bgcolor: "white",
              m: 0,
              p: 0,
            }}
          >
            <Stack flexGrow={1} m={1}>
              <Box
                display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
              >
                <ImageButton href="/">
                  <Box
                    component={"img"}
                    src={"hpplogo.png"}
                    width={{ xs: "100px", sm: "100px", md: "200px" }}
                  ></Box>
                </ImageButton>
              </Box>
              <Box
                display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
              >
                <ImageButtonSmall href="/">
                  <Box
                    component={"img"}
                    src={"hpplogo.png"}
                    width={{ xs: "100px", sm: "100px", md: "200px" }}
                  ></Box>
                </ImageButtonSmall>
              </Box>
            </Stack>
            <Box display={{ xs: "none", sm: "none", md: "none", lg: "block" }}>
              <NavButton href="what">What is HPP</NavButton>
              <NavButton href="benefits">Benefits of HPP</NavButton>
              <NavButton href="packaging">Packaging</NavButton>
              <NavButton href="whitepapers">White Papers</NavButton>
            </Box>
            <Box
              display={{ xs: "block", sm: "block", md: "block", lg: "none" }}
            >
              <BasicMenu></BasicMenu>
            </Box>

            <ContactButton href="contact">CONTACT US</ContactButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
