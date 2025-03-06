import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ContactButton, HomeImageButton } from "components/General/Buttons";
import React from "react";

const InfoBox = () => {
  return (
    <Box>
      <Stack
        position={"absolute"}
        sx={{
          width: "80%",

          mt: { xs: "20vw", sm: "14vw", md: "14vw" },
          ml: { xs: "10vw", sm: "10vw", md: "10vw" },

          fontSize: "4vw",
          color: "white",
        }}
      >
        <Box width={"50%"} lineHeight={1.5} letterSpacing={2}>
          <Box
            sx={{
              color: "white",
              fontWeight: "350",
              fontSize: "4vw",
              letterSpacing: 0,
            }}
          >
            Boost Your Product's Shelf Life and Quality with{" "}
            <Box
              sx={{
                color: "white",
                fontWeight: "650",
                fontSize: "4vw",
                letterSpacing: 0,
              }}
              display={"inline"}
            >
              High Pressure Processing
            </Box>
          </Box>
          <Box>
            <HomeImageButton href="/contact">
              <Typography fontSize={{ xs: "12px", sm: "16px", md: "20px" }}>
                Start Now
              </Typography>
            </HomeImageButton>
          </Box>
        </Box>
      </Stack>
      <Box component={"img"} src={"hpp-short.jpg"} width={"100%"}></Box>
    </Box>
  );
};

export default InfoBox;

// glory juice, las margaritas, nanak , juice truck, pcfp, glory, tractor, avafina organics, body energy club, choices markets, evergreen herbs
