import React from "react";
import "./Header.css";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          Front<span>End</span> Develeop<span>er</span>
        </h1>
      </div>
      <div className="header__right">
        <Link to="about" smooth={true} duration={500}>
          <h4>About me</h4>
        </Link>
        <Link to="skill" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
        <a className="header__rightButton"
          href="mailto:e.surender14@gamil.com?Subject=Query/Feedack">Send Email</a>
      </div>
    </div>
  );
};

export default Header;
