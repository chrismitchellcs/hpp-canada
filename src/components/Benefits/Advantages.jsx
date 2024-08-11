import { Box, Stack } from "@mui/material";
import React from "react";

const Advantages = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"space-around"}
      spacing={4}
      p={3}
    >
      <Box
        component={"img"}
        src={"hpp circle.png"}
        width={{ xs: "100%", sm: "100%", md: "40%" }}
      ></Box>
      <Stack spacing={1} sx={{ fontSize: "18px" }}>
        <Box>
          <strong>Food Safety Guaranteed:</strong> HPP destroys pathogens
          (Salmonella, E. Coli, Listeria, Vibrio, norovirus, etc.) and spoilage
          microorganisms (lactic acid bacteria, coliforms, etc.), meeting the
          requirements of food authorities.
        </Box>
        <Box>
          <strong>Minimal Processing:</strong> The nutritional and organoleptic
          characteristics of food products are kept intact. It provides
          minimally processed foods, maintaining the freshness of the original
          product.
        </Box>
        <Box>
          <strong>New Market Opportunities:</strong> In the case of some
          products such as cured ham, this is the only technology that allows
          its producers to enter markets safely, such as Japan or the US.
        </Box>
        <Box>
          <strong>Shelf Life Extension:</strong> Depending on the product, HPP
          extends the shelf life up to 3x to 30x, while still ensuring a
          high-quality product.
        </Box>
        <Box>
          <strong>Improve Supply Chain Operations:</strong> Thanks to an
          extended shelf life, it is possible to optimize production planning
          and scale operations.
        </Box>
        <Box>
          <strong>Reduce Food Waste:</strong> HPP prevents food waste on the
          retail shelf and in the consumers refrigerator since it has an
          extended shelf life.
        </Box>
        <Box>
          <strong>Clean Label:</strong> HPP allows to drastically reduce or
          eliminate the use of preservatives or additives in food.
        </Box>
        <Box>
          <strong>Wide Range of Applications:</strong> HPP can be used for a
          variety of food application. Discover the range of applications on our
          website.
        </Box>
        <Box>
          <strong>Increases the Extraction Yield of Shellfish Meat:</strong>{" "}
          HPP, at low pressures (3,000 bar), is used for opening bivalve
          mollusks and removing meat from crustaceans, increasing efficiency and
          minimizing labor.
        </Box>
        <Box>
          <strong>Eco-friendly:</strong> It requires electricity and water,
          which can be recycled.
        </Box>
      </Stack>
    </Stack>
  );
};

export default Advantages;
