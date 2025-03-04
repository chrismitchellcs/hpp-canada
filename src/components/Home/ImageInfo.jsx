import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { AboutButton } from "components/General/Buttons";
import React from "react";

const ImageInfo = () => {
  return (
    <Stack
      pt={5}
      pb={3}
      sx={{ bgcolor: "#F5F5F5" }}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={4}
    >
      <Box
        width={"90%"}
        textAlign={"center"}
        sx={{ fontSize: "30px", fontWeight: "600" }}
      >
        How HPP Tolling Can Help Your Business
      </Box>
      <Stack
        width={"100%"}
        justifyContent={{ xs: "center", md: "center" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        direction={{ xs: "column", md: "row" }}
        spacing={5}
      >
        <Stack spacing={1} width={{ xs: "90%", sm: "90%", md: "25%" }}>
          <Box
            width={"80px"}
            height={"80px"}
            display={"flex"}
            alignItems={"center"}
          >
            <Box component={"img"} src="foodsafety.png" width={"60px"}></Box>
          </Box>
          <Box sx={{ fontSize: "22px", fontWeight: "600" }}>
            Food Safety Guarantee
          </Box>
          <Box sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}>
            HPP destroys pathogens (Salmonella, E. Coli, Listeria, Vibrio,
            norovirus, etc.) and spoilage microorganisms (lactic acid bacteria,
            coliforms, etc.), meeting the requirements of food authorities.
          </Box>
        </Stack>
        <Stack spacing={1} width={{ xs: "90%", sm: "90%", md: "25%" }}>
          <Box
            width={"80px"}
            height={"80px"}
            display={"flex"}
            alignItems={"center"}
          >
            <Box component={"img"} src="vegetable.png" width={"60px"}></Box>
          </Box>
          <Box sx={{ fontSize: "22px", fontWeight: "600" }}>
            Minimal Processing
          </Box>
          <Box sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}>
            The nutritional and organoleptic characteristics of food products
            are kept intact. It provides minimally processed foods, maintaining
            the freshness and taste of the original product.
          </Box>
        </Stack>

        <Stack spacing={1} width={{ xs: "90%", sm: "90%", md: "25%" }}>
          <Box
            width={"80px"}
            height={"80px"}
            display={"flex"}
            alignItems={"center"}
          >
            <Box component={"img"} src="shelflife.png" width={"60px"}></Box>
          </Box>
          <Box sx={{ fontSize: "22px", fontWeight: "600" }}>
            Shelf Life Extension
          </Box>
          <Box sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}>
            Depending on the product, HPP extends the shelf life up to 3x to
            30x, while still ensuring a high-quality product.
          </Box>
        </Stack>
      </Stack>
      {/* <AboutButton>Learn More</AboutButton> */}
    </Stack>
  );
};

export default ImageInfo;
