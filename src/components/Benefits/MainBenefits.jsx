import { Box, Stack } from "@mui/material";
import React from "react";

const MainBenefits = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      pt={{ xs: 0, sm: 0, md: 5 }}
      pb={5}
    >
      <Stack
        alignItems={"center"}
        width={{ xs: "80%", sm: "80%", md: "30%" }}
        textAlign={"center"}
        spacing={2}
      >
        <Box component={"img"} src="foodsafety.jpg" height={"75px"}></Box>
        <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
          Food Safety Guarantee
        </Box>
        <Box>
          HPP destroys pathogens (Salmonella, E. Coli, Listeria, Vibrio,
          norovirus, etc.) and spoilage microorganisms (lactic acid bacteria,
          coliforms, etc.), meeting the requirements of food authorities.
        </Box>
      </Stack>
      <Stack
        alignItems={"center"}
        width={{ xs: "80%", sm: "80%", md: "30%" }}
        textAlign={"center"}
        spacing={2}
      >
        <Box
          component={"img"}
          src="minimalprocessing.png"
          height={"75px"}
          p={"8px"}
        ></Box>
        <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
          Minimal Processing
        </Box>
        <Box>
          The nutritional and organoleptic characteristics of food products are
          kept intact. It provides minimally processed foods, maintaining the
          freshness and taste of the original product.
        </Box>
      </Stack>

      <Stack
        alignItems={"center"}
        width={{ xs: "80%", sm: "80%", md: "30%" }}
        textAlign={"center"}
        spacing={2}
      >
        <Box component={"img"} src="shelflife.png" height={"75px"}></Box>
        <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
          Shelf Life Extension
        </Box>
        <Box>
          Depending on the product, HPP extends the shelf life up to 3x to 30x,
          while still ensuring a high-quality product.
        </Box>
      </Stack>
    </Stack>
  );
};

export default MainBenefits;
