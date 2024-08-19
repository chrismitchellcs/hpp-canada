import { Box, Stack } from "@mui/material";
import {
  ContactButton,
  PaperButton,
  QuoteButton,
} from "components/General/Buttons";
import papers from "data/papers";
import React from "react";

const Papers = () => {
  const onButtonClick = (e) => {
    const pdfname = e.target.id;
    console.log(pdfname);
    const pdfUrl = pdfname;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfname; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Stack alignItems={"center"} bgcolor={"#F5F5F5"} pt={5} pb={5} spacing={5}>
      {papers.map((paper) => {
        return (
          <Stack width={"80%"} spacing={1}>
            <Box sx={{ fontSize: "22px", fontWeight: "450" }}>{paper.name}</Box>
            <Box sx={{ fontSize: "16px", fontWeight: "400" }} pb={1}>
              Download the PDF below to see more information about the benefits,
              shelf-life extension, and nutritional properties about using HPP
              on {paper.name}.
            </Box>
            <PaperButton onClick={onButtonClick} id={paper.pdf}>
              Download PDF
            </PaperButton>
          </Stack>
        );
      })}

      {/* <Stack width={"80%"} spacing={1}>
        <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
          Salsas, Plant-Based, and Fruit Products
        </Box>
        <Box sx={{ fontSize: "18px", fontWeight: "400" }} pb={1}>
          See the benefits of using high pressure processing on salsas, dips and
          spreads, salad dressings and wet salads, vegatable based ready-to-eat
          meals, and fruit products.
        </Box>
        <PaperButton onClick={onButtonClick}>Read More</PaperButton>
      </Stack>
      <Stack width={"80%"} spacing={1}>
        <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
          Fresh Cut Fruits & Vegetables
        </Box>
        <Box sx={{ fontSize: "18px", fontWeight: "400" }} pb={1}>
          See the benefits and challenges of using high pressure processing on
          fresh cut fruits & vegetables.
        </Box>
        <PaperButton>Read More</PaperButton>
      </Stack>
      <Stack width={"80%"} spacing={1}>
        <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
          Ready to Eat Meals (RTE Meals)
        </Box>
        <Box sx={{ fontSize: "18px", fontWeight: "400" }} pb={1}>
          See the benefits of using high pressure processing on meat-based RTE
          meals, seafood-based RTE meals, vegtable-based RTE meals, pasta or
          rice-based RTE meals, and soup-based RTE meals.
        </Box>
        <PaperButton>Read More</PaperButton>
      </Stack>
      <Stack width={"80%"} spacing={1}>
        <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
          Ready to Eat Meals
        </Box>
        <Box sx={{ fontSize: "18px", fontWeight: "400" }} pb={1}>
          See studies about the extended shelf life of some common ready to eat
          meals
        </Box>
        <PaperButton>Read More</PaperButton>
      </Stack> */}
    </Stack>
  );
};
export default Papers;
