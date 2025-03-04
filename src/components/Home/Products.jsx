import { Opacity } from "@mui/icons-material";
import { Box, Button, Fade, Grid, Stack, styled } from "@mui/material";
import products from "data/products";
import React from "react";
import { useState } from "react";

const ProductButton = styled(Button)({
  padding: 0,
  margin: 0,
  borderRadius: "20px",
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    // opacity: 0,
    filter: "brightness(0.8)",
  },
});

const Product = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    const product = e;

    setShow(!show);
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={4} p={2}>
      <ProductButton onClick={handleClick} id={product.name}>
        <Box position={"absolute"}>
          {show ? (
            <Fade in={show} timeout={1000}>
              <Box
                fontSize={{ xs: "10px", sm: "9px", md: "14px", lg: "16px" }}
                sx={{
                  color: "white",

                  fontWeight: "400",
                  textTransform: "none",
                  letterSpacing: 0,
                  m: 2,
                  textAlign: "left",
                }}
              >
                {product.description}
              </Box>
            </Fade>
          ) : (
            <Box
              sx={{
                color: "white",
                fontSize: "34px",
                fontWeight: "600",
                m: 2,
                textTransform: "none",
              }}
            >
              {product.name}
            </Box>
          )}
        </Box>
        <Box
          sx={{}}
          borderRadius={"20px"}
          component={"img"}
          src={product.image}
          width={"100%"}
        ></Box>
      </ProductButton>
    </Grid>
  );
};

const Products = () => {
  return (
    <Stack pt={5} pb={5} alignItems={"center"} spacing={1}>
      <Box sx={{ fontSize: "30px", fontWeight: "600" }}>Our Products</Box>
      <Box pt={1} width={"80%"} sx={{ fontSize: "18px", fontWeight: "350" }}>
        {" "}
        Experience our line of delicious food products crafted with the power of
        High Pressure Processing (HPP). Enjoy fresh, flavorful foods with
        minimal processing and an extended shelf life—quality you can taste,
        convenience you can trust.
      </Box>
      <Grid
        container
        spacing={0}
        textAlign={"center"}
        justifyContent={"space-around"}
        rowSpacing={4}
      >
        {products.map((product) => {
          return <Product product={product}></Product>;
        })}
      </Grid>
    </Stack>
  );
};

export default Products;
