import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactUs.css";
import Navbar from '../../Components/navbar/Navbar';
import Header from '../../Components/header/Header';
import MailList from '../../Components/mailList/MailList';
import Footer from '../../Components/footer/Footer';

const ContactUs = () => {
  const form = useRef();
  const [acknowledgment, setAcknowledgment] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6b19hnc",
        "template_ya7grdp",
        form.current,
        "n5bAkWpXSqZRuRdos"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setAcknowledgment("Thank you! Your message has been sent.");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          setAcknowledgment("Oops! Something went wrong. Please try again.");
        }
      );
  };
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="contact-us-container">
        <h1>Reach Us Here</h1> 
        <div className="StyledContactForm">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
            {acknowledgment && <p className="acknowledgment">{acknowledgment}</p>}
          </form>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default ContactUs;
