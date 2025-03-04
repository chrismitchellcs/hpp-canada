import { Stack, Box } from "@mui/material";
import React from "react";

const OtherServices = () => {
  return (
    <Stack pb={5} alignItems={"center"} spacing={1}>
      <Stack
        sx={{ bgcolor: "white" }}
        width={"100%"}
        alignItems={"center"}
        spacing={4}
      >
        <Box sx={{ fontSize: "30px", fontWeight: "600" }}>Other Services</Box>
        <Stack
          width={"100%"}
          spacing={5}
          justifyContent={{ xs: "center", md: "center" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          direction={{ xs: "column", md: "row" }}
        >
          <Stack spacing={1} width={{ xs: "90%", sm: "90%", md: "25%" }}>
            <Box
              width={"80px"}
              height={"80px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Box component={"img"} src="bottling.png" width={"60px"}></Box>
            </Box>
            <Box sx={{ fontSize: "22px", fontWeight: "600" }}>Bottling</Box>
            <Box sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}>
              We provide high-quality bottling services with PET bottles for
              retail and Bag-in-Box solutions for bulk needs, offering durable
              and cost-effective packaging options.
            </Box>
          </Stack>
          <Stack spacing={1} width={{ xs: "90%", sm: "90%", md: "25%" }}>
            <Box
              width={"80px"}
              height={"80px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Box component={"img"} src="juicing.png" width={"60px"}></Box>
            </Box>
            <Box sx={{ fontSize: "22px", fontWeight: "600" }}>Juicing</Box>
            <Box sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}>
              We provide high-quality juicing services, using fresh ingredients
              and advanced processing techniques to deliver great-tasting,
              nutrient-rich beverages. Whether you need custom formulations or
              large-scale production, we ensure consistency and quality in every
              batch.
            </Box>
          </Stack>

          <Stack spacing={1} width={{ xs: "90%", sm: "90%", md: "25%" }}>
            <Box
              width={"80px"}
              height={"80px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Box component={"img"} src="copacking.png" width={"60px"}></Box>
            </Box>
            <Box sx={{ fontSize: "22px", fontWeight: "600" }}>Co-Packing</Box>
            <Box sx={{ fontSize: "18px", fontWeight: "350", lineHeight: 1.4 }}>
              Our co-packing services offer end-to-end solutions, including
              production, bottling, labeling, and packaging. We help brands
              scale efficiently while maintaining quality and compliance, making
              it easy to bring your products to market.
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OtherServices;
