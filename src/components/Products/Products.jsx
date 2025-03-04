import { Box, Stack } from "@mui/material";
import products from "data/products";
import React from "react";

const AllProducts = () => {
  return (
    <Stack width={"100%"} alignItems={"center"} bgcolor={"white"} pt={5}>
      <Stack spacing={4} pl={3} pr={3}>
        {products.map((product, index) => {
          if (index !== products.length - 1)
            return (
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
                spacing={3}
              >
                <Box textAlign={"center"}>
                  <Box
                    component={"img"}
                    src={product.image}
                    width={{ xs: "90%", md: "500px" }}
                    borderRadius={"10px"}
                  ></Box>
                </Box>
                <Stack spacing={1}>
                  <Box fontSize={"26px"} fontWeight={"600"}>
                    {product.name}
                  </Box>
                  <Box fontSize={{ xs: "14px", sm: "16px" }} fontWeight={"350"}>
                    {product.description}
                  </Box>
                </Stack>
              </Stack>
            );
        })}
      </Stack>
      <Stack
        mt={5}
        pt={5}
        pb={5}
        spacing={1}
        justifySelf={"center"}
        textAlign={"center"}
        bgcolor={"#F5F5F5"}
        width={"100%"}
      >
        <Box fontSize={"30px"} fontWeight={"600"}>
          And More...
        </Box>
        <Box fontSize={"18px"} fontWeight={"350"} pl={5} pr={5}>
          We are always working on new products, please get in touch if you want
          to collaborate!
        </Box>
      </Stack>
    </Stack>
  );
};

export default AllProducts;
