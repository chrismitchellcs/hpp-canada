import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

const ImageInfo = () => {
  return (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "column-reverse",
        md: "row",
      }}
      pt={5}
      pb={5}
      justifyContent={"space-around"}
      alignItems={"center"}
      //   sx={{ bgcolor: "#F5F5F5" }}
      sx={{ bgcolor: "white" }}
    >
      <Stack
        width={{ xs: "80%", sm: "80%", md: "40%" }}
        height={"100%"}
        justifyContent={"center"}
      >
        {/* <Box sx={{ fontSize: "18px", fontWeight: "400" }}>
          <ul style={{ marginLeft: "0px" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>Healthier Products:</strong> HPP maintains the nutritional
              value of the original product, keeping your label clean and
              increasing customer satisfaction.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Longer Shelf Life:</strong> Extended product shelf-life
              reduces lost revenue and increases yields as well as customer
              satisfaction.
            </li>
            <li>
              <strong>Fresh Taste Maintained:</strong> Processing with pressure
              instead of thermal and chemical treatments maintains the quality
              and original flavor and texture of your product.
            </li>
          </ul>
        </Box> */}
        <Stack justifyContent={"space-around"} pt={5} pb={5} spacing={4}>
          <Stack
            width={"100%"}
            spacing={4}
            direction={"row"}
            alignItems={"center"}
          >
            <Box component={"img"} src="foodsafety.jpg" width={"80px"}></Box>
            <Stack spacing={2}>
              <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
                Food Safety Guarantee
              </Box>
              <Box>
                HPP destroys pathogens (Salmonella, E. Coli, Listeria, Vibrio,
                norovirus, etc.) and spoilage microorganisms (lactic acid
                bacteria, coliforms, etc.), meeting the requirements of food
                authorities.
              </Box>
            </Stack>
          </Stack>
          <Stack
            width={"100%"}
            spacing={4}
            direction={"row"}
            alignItems={"center"}
          >
            <Box
              component={"img"}
              src="minimalprocessing.png"
              width={"80px"}
              p={"8px"}
            ></Box>

            <Stack spacing={2}>
              <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
                Minimal Processing
              </Box>
              <Box>
                The nutritional and organoleptic characteristics of food
                products are kept intact. It provides minimally processed foods,
                maintaining the freshness and taste of the original product.
              </Box>
            </Stack>
          </Stack>
          {/* <Stack
            alignItems={"center"}
            width={"100%"}
            textAlign={"center"}
            spacing={2}
          >
            <Box
              component={"img"}
              src="minimalprocessing.png"
              height={"75px"}
            ></Box>
            <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
              Minimal Processing
            </Box>
            <Box>
              The nutritional and organoleptic characteristics of food products
              are kept intact. It provides minimally processed foods,
              maintaining the freshness and taste of the original product.
            </Box>
          </Stack> */}
          <Stack
            width={"100%"}
            spacing={4}
            direction={"row"}
            alignItems={"center"}
          >
            <Box component={"img"} src="shelflife.png" width={"80px"}></Box>
            <Stack spacing={2}>
              <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
                Shelf Life Extension
              </Box>
              <Box>
                Depending on the product, HPP extends the shelf life up to 3x to
                30x, while still ensuring a high-quality product.
              </Box>
            </Stack>
          </Stack>
          {/* <Stack
            alignItems={"center"}
            width={"100%"}
            textAlign={"center"}
            spacing={2}
          >
            <Box component={"img"} src="shelflife.png" height={"75px"}></Box>
            <Box sx={{ fontSize: "22px", fontWeight: "450" }}>
              Shelf Life Extension
            </Box>
            <Box>
              Depending on the product, HPP extends the shelf life up to 3x to
              30x, while still ensuring a high-quality product.
            </Box>
          </Stack> */}
        </Stack>
      </Stack>
      <Box
        component={"img"}
        src={"hpp-machine.jpg"}
        sx={{ borderRadius: "10px" }}
        width={{ xs: "80%", sm: "80%", md: "50%" }}
      ></Box>
    </Stack>
  );
};

export default ImageInfo;
