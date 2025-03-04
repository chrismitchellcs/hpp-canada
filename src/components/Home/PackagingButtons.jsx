import { Box, Button, Grid, Stack, styled } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import items from "data/items";
import { AboutButton, ContactButton, TitleButton } from "../General/Buttons";

// @ts-ignore
const StyledButton = styled(Button)(({ color1, color2 }) => ({
  backgroundColor: "#F5F5F5",
  color: "black",
  borderRadius: "10px",

  "&:hover": {
    backgroundColor: "lightgrey",
    color: "#black",
  },
}));

const ItemButton = ({ item, arrow }) => {
  return (
    <Stack
      width={"250px"}
      justifyContent={"center"}
      alignItems={"CENTER"}
      spacing={2}
      mt={2}
      mb={2}
    >
      <Box component={"img"} src={item.image} width={"25%"}></Box>
      <Box textTransform={"none"} fontSize={"16px"}>
        {item.name}
      </Box>

      {/* <Box
            sx={{
              p: 1,
              maxWidth: "250px",
              minWidth: "250px",
              borderRadius: "10px",
            }}
          >
            <Stack
              width={"100%"}
              direction={"row"}
              spacing={1}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Box sx={{ fontSize: "14px", fontWeight: "500" }}>{name}</Box>
              {arrow ? (
                <KeyboardArrowUpIcon
                  sx={{ fontSize: "24px" }}
                ></KeyboardArrowUpIcon>
              ) : (
                <KeyboardArrowDownIcon
                  sx={{ fontSize: "24px" }}
                ></KeyboardArrowDownIcon>
              )}
            </Stack>
          </Box> */}
    </Stack>
  );
};

const Item = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div>
      <StyledButton
        id={item.name}
        onClick={handleClick}
        // @ts-ignore
        color1={"#F5F5F5"}
        color2={"#cfcccc"}
      >
        <ItemButton item={item} arrow={showDescription}></ItemButton>
      </StyledButton>
      {showDescription && (
        <Box
          sx={{
            bgcolor: "#F5F5F5",
            m: 2,
            pr: 3,
            pt: 1,
            pb: 1,
            pl: 0,
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          {item.description}
        </Box>
      )}
    </div>
  );
};

const PackagingButtons = ({ items }) => {
  return (
    <Stack
      pb={5}
      alignItems={"center"}
      spacing={1}
      bgcolor="white"
      width={"100%"}
      justifyContent={"center"}
    >
      {/* <Box sx={{ fontSize: "30px", fontWeight: "500", textAlign: "center" }}>
        Compatible Packaging
      </Box> */}
      {/* <TitleButton href="packaging">Compatible Packaging</TitleButton> */}
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={4}
      >
        <Box sx={{ fontSize: "30px", fontWeight: "600" }}>
          Compatible Packaging
        </Box>
        <AboutButton>Learn More</AboutButton>
      </Stack>
      <Grid
        width={{ xs: "100%", sm: "100%", md: "100%", lg: "100%" }}
        container
        justifyContent={"center"}
        textAlign={"center"}
        rowSpacing={4}
      >
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Item item={item}></Item>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default PackagingButtons;
