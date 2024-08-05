import { Box, Button, Stack } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Package = ({ name, image, description }) => {
  const [showDescription, setShowDescription] = React.useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

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
        <Box component={"img"} src={image} height={"250px"} pb={2}></Box>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"80%"}
          alignItems={"center"}
        >
          <Box sx={{ fontSize: "22px", fontWeight: "450", color: "#38ad56" }}>
            {name}
          </Box>
          <Button onClick={handleClick}>
            <KeyboardArrowDownIcon
              sx={{ fontSize: "30px", color: "#38ad56" }}
            ></KeyboardArrowDownIcon>
          </Button>
        </Stack>
        {showDescription && <Box width={"100%"}>{description}</Box>}
      </Stack>
    </Stack>
  );
};

export default Package;
