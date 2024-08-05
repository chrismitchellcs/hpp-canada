import { Box, Button, Grid, Stack, styled } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import items from "data/items";
import { ContactButton, TitleButton } from "../General/Buttons";

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
        color1={"white"}
        color2={"#cfcccc"}
      >
        <ItemButton name={item.name} arrow={showDescription}></ItemButton>
      </StyledButton>
      {showDescription && (
        <Box
          sx={{
            bgcolor: "white",
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
    <Stack pt={5} pb={5} alignItems={"center"} spacing={1} bgcolor="#F5F5F5">
      {/* <Box sx={{ fontSize: "30px", fontWeight: "500", textAlign: "center" }}>
        Compatible Packaging
      </Box> */}
      <TitleButton>Compatible Packaging</TitleButton>
      <Box sx={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
        HPP works best with packaging that contains minimal air or headspace and
        can flex up to 15% to withstand high pressure, accommodating various
        packaging types.
      </Box>
      <Grid container spacing={0} textAlign={"center"} rowSpacing={4}>
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