import ContactForm from "components/Contact/ContactForm";
import Data from "components/Contact/Data";
import Info from "components/Contact/Info";
import Footer from "components/General/Footer";
import InfoBox from "components/General/InfoBox";
import NavBar from "components/General/NavBar";

import React from "react";

const Contact = () => {
  return (
    <div>
      <NavBar></NavBar>
      {/* <InfoBox title={"Contact Us"}></InfoBox> */}
      <Info></Info>
      <ContactForm></ContactForm>
      {/* <Data></Data> */}
      <Footer></Footer>
    </div>
  );
};

export default Contact;
