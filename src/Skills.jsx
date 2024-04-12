import React, { useRef } from "react";
import "./Skills.css";

export function Skills() {
  const skillsRef = useRef(null);
  return (
    <div id="skills" ref={skillsRef}>
      <h1 className="sub-title">
        My <span>Skills</span>
      </h1>
      <section>
        <div className="container1" id="Skills">
          <h1 className="heading1"> Technical Skills</h1>
          <div className="Technical-bars">
            <div className="bar">
              <i
                style={{ color: "#147bbc" }}
                className="fa-brands fa-html5"
              ></i>
              <div className="info">
                <span>HTML</span>
              </div>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i
                style={{ color: "#02273e" }}
                className="fa-brands fa-css3-alt"
              ></i>
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line css">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{ color: "#7d4905" }} className="fa-brands fa-js"></i>
              <div className="info">
                <span>JavaScript</span>
              </div>
              <div className="progress-line JavaScript">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i
                style={{ color: "#370346" }}
                className="fa-brands fa-react"
              ></i>
              <div className="info">
                <span>React</span>
              </div>
              <div className="progress-line React">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i
                style={{ color: "#bcb614" }}
                className="fa-brands fa-angular"
              ></i>
              <div className="info">
                <span>Angular</span>
              </div>
              <div className="progress-line Angular">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{ color: "#14b4bc" }} className="fa-brands fa-java"></i>
              <div className="info">
                <span>Java</span>
              </div>
              <div className="progress-line Java">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{ color: "#14bc38" }} className="fa-solid fa-code"></i>
              <div className="info">
                <span>TypeScript</span>
              </div>
              <div className="progress-line TypeScript">
                <span></span>
              </div>
            </div>

            <div className="bar">
              <i
                style={{ color: "#bc14a3" }}
                className="fa-solid fa-database"
              ></i>
              <div className="info">
                <span>MySQL</span>
              </div>
              <div className="progress-line MySQL">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i
                style={{ color: "#bc1417" }}
                className="fa-brands fa-python"
              ></i>
              <div className="info">
                <span>Python</span>
              </div>
              <div className="progress-line Python">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i
                style={{ color: "#141fbc" }}
                className="fa-solid fa-database"
              ></i>
              <div className="info">
                <span>AWS</span>
              </div>
              <div className="progress-line MySQL">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="container1">
          <h1 className="heading1" style={{ marginRight: "120px" }}>
            {" "}
            Professional Skills
          </h1>
          <div className="radial-bars" style={{ marginLeft: "100px" }}>
            <svg width="200px" height="200px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-1" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">100%</div>
            <div className="text">Communication</div>
          </div>
          <div className="radial-bars" style={{ marginLeft: "100px" }}>
            <svg width="200px" height="200px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-2" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage" style={{ marginLeft: "15px" }}>
              95%
            </div>
            <div
              className="text"
              style={{ marginTop: "3px", marginLeft: "10px" }}
            >
              Teamwork
            </div>
          </div>
          <div className="radial-bars" style={{ marginLeft: "100px" }}>
            <svg width="200px" height="200px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-3" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage" style={{ marginLeft: "15px" }}>
              90%
            </div>
            <div
              className="text"
              style={{ marginTop: "3px", marginLeft: "10px" }}
            >
              Leadership{" "}
            </div>
          </div>
          <div className="radial-bars" style={{ marginLeft: "100px" }}>
            <svg width="200px" height="200px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-4" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">85%</div>
            <div className="text">Problem Solving</div>
          </div>
        </div>
      </section>
    </div>
  );
}
