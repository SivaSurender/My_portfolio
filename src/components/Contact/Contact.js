import {
  Facebook,
  Instagram,
  LinkedIn,
 
} from "@mui/icons-material";
// import { IconButton } from "@mui/icons-material";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>e.surender14@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@SivaSurender</span>
        </p>
        <p>
          Contact Number : <span>+919789539979</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/bala-e-30b82191/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.facebook.com/bala.surender.7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/im_sivasurender/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          
        </div>
      </div>
    </Element>
  );
};

export default Contact;
