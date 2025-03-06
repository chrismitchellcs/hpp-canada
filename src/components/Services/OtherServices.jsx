import { Stack, Box } from "@mui/material";
import React from "react";

const OtherServices = () => {
  return (
    <Stack pb={5} alignItems={"center"} spacing={1} bgcolor={"#F5F5F5"}>
      <Stack width={"100%"} alignItems={"center"} spacing={2}>
        <Box
          sx={{ fontSize: "26px", fontWeight: "600" }}
          width={"100%"}
          bgcolor={"white"}
          pt={5}
          pb={5}
        >
          <Box width={"80%"} justifySelf={"center"}>
            HPP Canada offers more than just high-pressure processing. From
            bottling and juicing to co-packing, we provide end-to-end solutions
            to help bring your products to market.
          </Box>
        </Box>
        <Stack
          pt={5}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
        >
          <Stack spacing={1} width={"80%"}>
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
              <p style={{ marginBottom: "16px" }}>
                We provide high-quality bottling services with durable and
                cost-effective packaging options, including:
              </p>
              <ul style={{ marginBottom: "16px", paddingLeft: "20px" }}>
                <li>
                  <strong>PET Bottles</strong> for retail: 1L, 370ml, and 300ml
                </li>
                <li>
                  <strong>Bag-in-Box Solutions</strong> for bulk needs: 5L and
                  20L bags
                </li>
              </ul>
              <p>
                Learn more at{" "}
                <a
                  href="https://www.watermarkbeverages.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", textDecoration: "underline" }}
                >
                  Watermark Beverages
                </a>
                .
              </p>
            </Box>
          </Stack>
          <Stack spacing={1} width={"80%"}>
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
              <p style={{ marginBottom: "16px" }}>
                We provide high-quality juicing services, using fresh
                ingredients and advanced processing techniques to deliver
                great-tasting, nutrient-rich beverages.
              </p>
              <p style={{ marginBottom: "16px" }}>
                Whether you need custom formulations or large-scale production,
                we ensure consistency and quality in every batch.
              </p>
            </Box>
          </Stack>

          <Stack spacing={1} width={"80%"}>
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
              <p style={{ marginBottom: "16px" }}>
                Our co-packing services offer end-to-end solutions, including
                production, bottling, labeling, and packaging.
              </p>
              <p style={{ marginBottom: "16px" }}>
                We help brands scale efficiently while maintaining quality and
                compliance, making it easy to bring your products to market.
              </p>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OtherServices;
