import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ContactButton, HomeImageButton } from "components/General/Buttons";
import React from "react";

const InfoBox = () => {
  return (
    // <Stack
    //   spacing={2}
    //   pb={5}
    //   pt={{ xs: 5, sm: 5, md: 10 }}
    //   sx={{
    //     width: "100%",
    //     alignItems: "center",
    //     bgcolor: "#F5F5F5",
    //     // bgcolor: "black",
    //     color: "black",
    //   }}
    // >
    //   <Box sx={{ fontSize: "18px", fontWeight: "450" }}>HPP CANADA</Box>
    //   <Box
    //     width={{ xs: "80%", sm: "80%", md: "60%" }}
    //     sx={{
    //       fontSize: "32px",
    //       fontWeight: "500",
    //       textAlign: "center",
    //       letterSpacing: "0px",
    //     }}
    //   >
    //     Boost Your Product's Shelf Life and Quality with
    //     <Typography
    //       sx={{ fontSize: "32px", fontWeight: "500", color: "#38ad56" }}
    //     >
    //       High Pressure Processing
    //     </Typography>
    //   </Box>
    //   <Box sx={{ fontSize: "18px", fontWeight: "400" }}>
    //     Based in Vancouver, Canada
    //   </Box>
    // </Stack>
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
            <HomeImageButton>
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
