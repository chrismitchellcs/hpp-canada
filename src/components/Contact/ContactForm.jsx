import { Alert, Button, Stack, TextField } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import React from "react";

const ContactForm = () => {
  const [formSent, setFormSent] = useState(false);
  const [formNotSent, setFormNotSent] = useState(false);

  const captchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[2].value;
    const subject = e.target[4].value;
    const message = e.target[7].value;

    const token = captchaRef.current.getValue();

    captchaRef.current.reset();
    console.log(token, name, email, subject, message);
    await axios
      .post(`https://server-hpp.vercel.app/sendemail`, {
        token,
        name,
        email,
        subject,
        message,
      })
      .then((res) => {
        setFormNotSent(false);
        setFormSent(true);
      })
      .catch((error) => {
        setFormSent(false);
        setFormNotSent(true);
      });
  };

  return (
    <Stack
      width={"100%"}
      alignItems={"center"}
      bgcolor={"#F5F5F5"}
      pt={5}
      pb={3}
    >
      <form onSubmit={handleSubmit} style={{ width: "80%" }}>
        {/* <label htmlFor="name">Name</label> */}
        {/* <input type="text" id="name" className="input" /> */}
        <Stack spacing={2}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              sx={{ width: "48%", bgcolor: "white" }}
            />{" "}
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              sx={{ width: "48%", bgcolor: "white" }}
            />
          </Stack>
          <TextField
            id="subject"
            label="Subject"
            variant="outlined"
            multiline
            sx={{ width: "100%", bgcolor: "white" }}
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            multiline
            sx={{ width: "100%", bgcolor: "white" }}
          />
        </Stack>
        <Stack
          width={"100%"}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: 2, mb: 2 }}
          justifyContent={"space-between"}
        >
          <ReCAPTCHA
            sitekey="6LfgHi0qAAAAAH_cOwJG1wTIvXvsnldn4TweXd9L"
            ref={captchaRef}
          />
          <Button
            type="submit"
            sx={{
              color: "white",
              backgroundColor: "#38ad56",
              width: "30%",
              "&:hover": {
                color: "white",
                bgcolor: "#26753a",
              },
            }}
          >
            Submit
          </Button>
        </Stack>
        {formSent && (
          <Alert
            sx={{ mt: 3, mb: 3 }}
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
          >
            Email sent! We will reply ASAP.
          </Alert>
        )}
        {formNotSent && (
          <Alert
            sx={{ mt: 3, mb: 3 }}
            icon={<ErrorOutlineIcon fontSize="inherit" />}
            severity="error"
          >
            Email not sent. Please try again or use our email
            patricia@hppcanada.ca
          </Alert>
        )}
      </form>
    </Stack>
  );
};

export default ContactForm;
