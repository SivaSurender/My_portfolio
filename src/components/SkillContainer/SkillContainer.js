import React from "react";
import { Element } from "react-scroll";
import "./SkillContainer.css";
import skills from "../../assets/skills.jpg";
import LinearProgress from "@mui/material/LinearProgress";

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skill">
      <div className="skillContainer__image">
        <img src={skills} alt="skill" />
      </div>
      <div className="skillContainer__text">
        <h2>Skill Stack</h2>
        <div className="skillContainer__skillSet">
          <h5>React JS</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="buffer" value={65} valueBuffer={85} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>JavaScript</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="buffer" value={75} valueBuffer={90} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>CSS</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="buffer" value={80} valueBuffer={84} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>HTML</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="buffer" value={85} valueBuffer={87} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Python</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="buffer" value={50} valueBuffer={53} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Bootstrap</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="buffer" value={55} valueBuffer={60} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
