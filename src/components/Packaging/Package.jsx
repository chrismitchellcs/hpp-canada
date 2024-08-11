import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Package = ({ name, image, description }) => {
  const [showDescription, setShowDescription] = React.useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  const PackageButton = styled(Button)({
    backgroundColor: "transparent",
    color: "black",
    maxHeight: "40px",
    margin: "10px",
    fontFamily: "inherit",
    fontSize: "26px",
    fontWeight: "500",
    letterSpacing: "0px",

    "&:hover": {
      backgroundColor: "transparent",
      color: "#38ad56",
    },
  });

  return (
    <Stack
      alignItems={"center"}
      pt={5}
      pb={5}
      bgcolor={"#F5F5F5"}
      height={"100%"}
    >
      <Stack
        width={"80%"}
        bgcolor={"white"}
        p={5}
        borderRadius={5}
        alignItems={"center"}
        spacing={3}
      >
        <Box
          component={"img"}
          src={image}
          height={{ xs: "150px", sm: "200px", md: "250px" }}
          pb={2}
        ></Box>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"80%"}
          alignItems={"center"}
        >
          <Box sx={{ fontSize: "22px", fontWeight: "400", color: "black" }}>
            {name}
          </Box>
          <PackageButton onClick={handleClick}>
            {showDescription ? (
              <KeyboardArrowUpIcon
                sx={{ fontSize: "30px", color: "inherit" }}
              ></KeyboardArrowUpIcon>
            ) : (
              <KeyboardArrowDownIcon
                sx={{ fontSize: "30px", color: "inherit" }}
              ></KeyboardArrowDownIcon>
            )}
          </PackageButton>
        </Stack>
        {showDescription && <Box width={"100%"}>{description}</Box>}
      </Stack>
    </Stack>
  );
};

export default Package;
