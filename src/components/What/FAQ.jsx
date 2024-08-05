import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";

const FAQ = ({ faqs }) => {
  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      spacing={3}
      pt={3}
      pb={3}
      sx={{ fontSize: "18px", fontWeight: "400", bgcolor: "#F5F5F5" }}
    >
      <Box sx={{ fontSize: "26px", fontWeight: "500" }}>
        Frequently Asked Questions
      </Box>
      {faqs.map((faq) => (
        <Accordion sx={{ width: "80%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontSize: "18px", fontWeight: "400" }}
          >
            {faq.question}
          </AccordionSummary>
          <AccordionDetails
            sx={{ whiteSpace: "pre-wrap", fontWeight: "400", fontSize: "16px" }}
          >
            {faq.answer}
          </AccordionDetails>
        </Accordion>
      ))}
      {/* <Accordion sx={{ bgcolor: "#F5F5F5" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion> */}
    </Stack>
  );
};

export default FAQ;
