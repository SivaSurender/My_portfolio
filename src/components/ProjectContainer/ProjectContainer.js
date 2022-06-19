import React from "react";
import { Element } from "react-scroll";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import img1 from "../../assets/todo.jpg";
import img2 from "../../assets/weather.jpg";
import img3 from "../../assets/quiz.jpg";
import img4 from "../../assets/restaurant.jpg";

const ProjectContainer = () => {
  const projects = [
    {
      img: img1,
      title: "ToDo List",
      desc: "This Simple todo list project created with the help of javascript allows us to add , remove search the the list of to do's based on user's input",
      link: "https://sivasurender.github.io/Simple_ToDo_List/",
    },
    {
      img: img2,
      title: "Weather App",
      desc: "This project has been created with accu weather free api which is limited to 50 requests per day. This project allows us to determine real time weather of a region by interacting with AccuWeather's API",
      link: "https://sivasurender.github.io/MyWeatherApp/",
    },
    {
      img: img3,
      title: "Quiz Prototype",
      desc: "This Sample Quiz template has an extensive and interactive UI with bootstrap, has dynamically observable result window with the help of modern js code. Editable, soon to be configured with firebase",
      link: "https://sivasurender.github.io/Quiz_Template/",
    },
    {
      img: img4,
      title: "Restaurant Finder Prototype",
      desc: "This Page allows us to find suitable restaurants nearby with the help of popular food deliver giants.",
      link: "https://sivasurender.github.io/Restaurant-Finder/",
    },
  ];
  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>Below are some of my works !!</p>
      <div className="projectContainer__projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            desc={project.desc}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
    </Element>
  );
};

export default ProjectContainer;
