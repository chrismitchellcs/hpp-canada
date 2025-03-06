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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Menu, MenuItem, Stack, styled } from "@mui/material";
import {
  NavButton,
  ContactButton,
  ImageButton,
  ImageButtonSmall,
} from "components/General/Buttons";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

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
        <MenuItem onClick={handleClose} id="whitepapers">
          White Papers
        </MenuItem>
        <MenuItem onClick={handleClose} id="packaging">
          Packaging
        </MenuItem>
        <MenuItem onClick={handleClose} id="products">
          Our Products
        </MenuItem>
        <MenuItem onClick={handleClose} id="services">
          Other Services
        </MenuItem>
      </Menu>
    </div>
  );
}

export default function NavBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setAnchorEl(null);
    const page = e.target.id;
    window.location.href = page;
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar sx={{ bgcolor: "rgba(255, 255, 255, 0.8)" }}>
          <Toolbar
            sx={{
              maxHeight: "20px",
              mr: 1,
              p: { xs: 0.1, sm: 0.1, md: 1 },
            }}
          >
            <Stack m={1}>
              <Box
                mr={3}
                ml={3}
                display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
              >
                <ImageButton href="/">
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    lineHeight={1}
                    color={"black"}
                  >
                    <Box
                      component={"img"}
                      src={"hpp-logo.png"}
                      width={{ xs: "100px", sm: "100px", md: "80px" }}
                    ></Box>
                    <Stack spacing={0} textAlign={"center"}>
                      <Box
                        fontSize={"26px"}
                        fontWeight={"800"}
                        // color={"#438fc9"}
                      >
                        HPP
                      </Box>
                      <Box
                        fontSize={"22px"}
                        fontWeight={"350"}
                        // color={"#438fc9"}
                      >
                        Canada
                      </Box>
                    </Stack>
                  </Stack>
                </ImageButton>
              </Box>
              <Box
                display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
              >
                <ImageButton href="/">
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    lineHeight={1}
                    color={"black"}
                  >
                    <Box
                      component={"img"}
                      src={"hpp-logo.png"}
                      width={{ xs: "60px", sm: "60px", md: "80px" }}
                    ></Box>
                    <Stack spacing={0} textAlign={"center"}>
                      <Box
                        fontSize={{ xs: "18px", sm: "20px", md: "26px" }}
                        fontWeight={"800"}
                        // color={"#438fc9"}
                      >
                        HPP
                      </Box>
                      <Box
                        fontSize={{ xs: "14px", sm: "16px", md: "22px" }}
                        fontWeight={"350"}
                        // color={"#438fc9"}
                      >
                        Canada
                      </Box>
                    </Stack>
                  </Stack>
                </ImageButton>
              </Box>
            </Stack>
            <Box
              flexGrow={1}
              display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
            >
              <NavButton onClick={handleClick}>
                About HPP <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </NavButton>
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
                <MenuItem onClick={handleClose} id="whitepapers">
                  White Papers
                </MenuItem>
              </Menu>

              <NavButton href="packaging">Packaging</NavButton>

              <NavButton href="products">Our Products</NavButton>
              <NavButton href="services">Other Services</NavButton>
            </Box>
            <Box
              flexGrow={1}
              display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
            >
              <BasicMenu></BasicMenu>
            </Box>

            <ContactButton href="contact">
              <Box
                fontSize={{ xs: "12px", md: "16px" }}
                p={{ xs: 0.5, sm: 0.5, md: 1 }}
              >
                Contact Us
              </Box>
            </ContactButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
