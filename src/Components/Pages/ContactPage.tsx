import React from "react";
import { MainTemplate } from "../Template/MainTemplate";
import { HeaderComponent } from "../Molcule/HeaderComponent";
import { FooterComponent } from "../Molcule/FooterComponent";
import ContactForm from "../Molcule/ContactForm";

const ContactPage = () => {
  return (
    <MainTemplate
      headerChild={<HeaderComponent />}
      mainChild={<ContactForm />}
      footerChild={<FooterComponent />}
    />
  );
};

export default ContactPage;
