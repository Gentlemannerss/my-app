import React from 'react';
import ContactForm from "../../components/ContactForm/ContactForm.js";
import OwnerInfo from "../../components/OwnerInfo/OwnerInfo.js";
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo.js";

function Contact() {
    return (
        <div>
            <OwnerInfo />
            <CompanyInfo />
            <ContactForm />
        </div>
    );
}

export default Contact;