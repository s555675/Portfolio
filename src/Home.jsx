import React from "react";
import img from "./Mannu.jpeg";
import "./Home.css";
import cv from "./assets/IshaaqShaikResume.pdf";

export function Home() {
  return (
    <div className="star">
      <nav>
        <a href="/" className="logo nav-brand">
          {" "}
          Portfolio
        </a>
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
          Education{" "}
        </a>
        <a href="#contact" className="me-5">
          Contact
        </a>
        <span></span>
      </nav>
      <div className="detel">
        <h1>
          I'm Ishaaq <span>Shaik </span>
        </h1>
        <h3> I am a Web Developer/React Developer and <br/>also a Python Developer </h3>
        <p>
          This is my official Website to shows all
          <br />
          Details about my education and work experience, my info .....
        </p>
        <a href={cv} className="btn btn-color">
          {" "}
          Download Resume
        </a>

        <div className="images">
          <img src={img} className="shape" alt="" />
        </div>
      </div>
    </div>
  );
}
