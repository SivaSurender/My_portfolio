import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent__container">
        <h1> Mr. BalaSivaSurander</h1>
        <p>
          {/* A creative and a passionate Frontend Developer with 1.5+ years of
          professional experience in developing front end applications using
          Modern React js, HTML 5,CSS 3,Bootstrap. I'm a self-learner with
          eagerness and flexibility to learn and adapt to any skill. I am open
          to take up challenging and exciting roles that involves lot of
          learning.  */}
          A Creative and a Passionate Front End Developer !
        </p>
        <a href="https://drive.google.com/uc?export=download&id=18fhSiERPSS8Fk5MMtIHqmprbv2v-45Gc">
          <button className="topContent__downloadButton">
            Download Résumé
          </button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__workButton">My Works</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
