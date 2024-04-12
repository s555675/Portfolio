import React from "react";
import img from "./Mannu.jpeg";
import "./Home.css";
import CV from "./assets/IshaaqShaikResume.pdf";
// import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="star">
      <nav>
        <h1 className="logo nav-brand">Portfolio</h1>

        <a href="#home" className="me-5">
          Home
        </a>
        <a href="#about" className="me-5">
          About
        </a>
        <a href="#experience" className="me-5">
          Experience
        </a>
        <a href="#projects" className="me-5">
          Projects
        </a>
        <a href="#skills" className="me-5">
          Skills
        </a>
        <a href="#education" className="me-5">
          Education
        </a>
        <a href="#contact" className="me-5">
          Contact
        </a>

        <span></span>
      </nav>
      <div className="detel" id="home">
        <h1>
          I'm Ishaaq <span>Shaik </span>
        </h1>
        <h3> In am a Web Developer with Python </h3>
        <p>
          This is my official Website to shows all
          <br />
          Details about my education and work experience, my info .....
        </p>
        <a href={CV} className="btn btn-color">
          Download Resume
        </a>

        <div className="images">
          <img src={img} className="shape" alt="ishaaq" />
        </div>
      </div>
    </div>
  );
}
