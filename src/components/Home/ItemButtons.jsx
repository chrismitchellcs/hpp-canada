import { Box, Button, Grid, Stack, styled } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import items from "data/items";
import { ContactButton, HomeButton, TitleButton } from "../General/Buttons";

// @ts-ignore
const StyledButton = styled(Button)(({ color1, color2 }) => ({
  backgroundColor: color1,
  color: "black",
  borderRadius: "10px",

  "&:hover": {
    backgroundColor: color2,
    color: "#black",
  },
}));

const ItemButton = ({ name, arrow }) => {
  return (
    <Stack width={"100%"}>
      <Box
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
      </Box>
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
        color1={item.color1}
        color2={item.color2}
      >
        <ItemButton name={item.name} arrow={showDescription}></ItemButton>
      </StyledButton>
      {showDescription && (
        <Box
          sx={{
            bgcolor: item.color1,
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

const ItemButtons = ({ items }) => {
  return (
    <Stack pt={5} pb={5} alignItems={"center"} spacing={1} bgcolor="#F5F5F5">
      {/* <Stack direction={"row"} spacing={2} alignItems={"center"}> */}
      {/* <Box sx={{ fontSize: "30px", fontWeight: "500", textAlign: "center" }}>
          See what HPP can do for you
        </Box> */}
      {/* <ContactButton>More Info</ContactButton>
      </Stack> */}
      {/* <Box sx={{ fontSize: "30px", fontWeight: "500", textAlign: "center" }}>
        Applications of High Pressure Processing in the Food Industry
      </Box> */}
      <TitleButton>
        Applications of High Pressure Processing in the Food Industry
      </TitleButton>
      <Box sx={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
        Explore the diverse ways HPP technology enhances food safety, extends
        shelf life, and maintains nutritional quality across various products.
      </Box>
      <Grid container spacing={0} textAlign={"center"} rowSpacing={4}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Item item={item}></Item>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ItemButtons;
