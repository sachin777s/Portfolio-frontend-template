import React, { useContext, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { themeContext } from '../../Context'

export const Contact = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false)

  const sendForm = async (e) => {
    e.preventDefault();
    console.log(form)
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        setDone(true);
      }, function (error) {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="contact-form" name="Contact">
      <div className="c-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact Me</span>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendForm}>
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <textarea
            name="message"
            className="user_message"
            placeholder="Type you message...."
          />
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for contacting me!"}</span>
        </form>
      </div>
    </div>
  );
};
