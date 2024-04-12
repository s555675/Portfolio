import React, { useRef } from "react";
import { useState } from "react";

import "./Experience.css";

export function Experience() {
  const experienceRef = useRef(null);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div id="experience" ref={experienceRef}>
      <section
        id
        style={{
          display: "grid",
          placeItems: "center",
        }}
        className="qualification sections"
      >
        {/* <h2 className='section_title' style={{ fontSize: '50px' }}>Educational <span> Qualifications</span></h2> */}
        <br />
        <span
          className="section__subtitle"
          style={{ fontSize: "20px", color: "black" }}
        >
          <h1 className="sub-title">
            My <span>Experience</span>
          </h1>
        </span>
        <br></br>
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              onClick={() => toggleTab(1)}
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex me-2"
                  : "qualification__button button--flex me-2"
              }
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Experience
            </div>

            <br></br>
            <br></br>
          </div>
          <div className="qualification__sections">
            <div
              onClick={() => toggleTab(1)}
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h5
                    className="qualification__title"
                    style={{
                      fontFamily: "Times ",
                      fontSize: "20px",
                      color: " Red",
                    }}
                  >
                    TCS(AWS Arehitecture)
                  </h5>
                  <span
                    className="qualification__subtitle"
                    style={{ color: "black" }}
                  >
                    This project delves into the deployment of server instances
                    on Amazon Web Services (AWS) for efficient data hosting
                    utilizing JAR/WAR files. With a focus on
                    scalability,reliability,cost-effectiveness, the project
                    outlines a comprehensive solution tailored to the specific
                    needs of data deployment. It begins by guiding through the
                    setup of an AWS account.Following account creation, the
                    project proceeds to provision Elastic Compute Cloud (EC2)
                    instances, Subsequently, the project demonstrates the
                    deployment of JAR/WAR files onto the provisioned instances,
                    covering file transfer methods, application server
                    configuration, and application launch procedures...{" "}
                  </span>
                  <div className="qualification__calendar">
                    <br />
                    <i className="uil uil-calendar-alt">
                      <span>2019-2020</span>
                    </i>
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h5
                    className="qualification__title"
                    style={{
                      fontFamily: "Times ",
                      fontSize: "20px",
                      color: " Red",
                    }}
                  >
                    Tata Consultancy Services
                  </h5>
                  <span
                    className="qualification__subtitle "
                    style={{ color: "black" }}
                  >
                    {" "}
                    Provided exceptional support to a medical company for 10
                    months, demonstrating expertise in SQL to address technical
                    issues and ensure seamless operations of critical systems.
                    Actively participated in daily stand-up calls and scrum
                    meetings, collaborating with cross-functional teams to
                    discuss ongoing tasks, address challenges, and streamline
                    communication channels, ensuring efficient project progress.
                    Recognized for outstanding performance and dedication to
                    excellence, received the "Best Employee Award" from TCS for
                    contributions to science and technology within the medical
                    domain.Achieved an award for significant contributions to
                    scientific work..
                  </span>
                  <div className="qualification__calendar">
                    <br />
                    <i className="uil uil-calendar-alt">
                      <span> 7/03/2020 - 19/11/2020</span>
                    </i>
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h5
                    className="qualification__title"
                    style={{
                      fontFamily: "Times ",
                      fontSize: "20px",
                      color: " Red",
                    }}
                  >
                    {" "}
                    Tata Consultancy Services (Web Developer)
                  </h5>
                  <span
                    className="qualification__subtitle"
                    style={{ color: "black" }}
                  >
                    Utilized a variety of front-end languages and libraries,
                    including HTML/CSS, JavaScript, and jQuery, to enhance user
                    interfaces and Leveraged the Python programming language and
                    APIs to develop robust backend systems. Conducted weekly and
                    month-end reports to track team performance and identify
                    areas for improvement. Actively participated in scrum
                    meetings to foster collaboration, address impediments, and
                    streamline project workflows, ensuring the team's alignment
                    with project timelines and goals.Designed and applied an AWS
                    Cloud project for TCS-INFRAMIND to optimize and improving
                    system performance.
                  </span>
                  <div className="qualification__calendar">
                    <br />
                    <i className="uil uil-calendar-alt">
                      <span>11/01/2021 - 27/06/2022 </span>
                    </i>
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h5
                    className="qualification__title"
                    style={{
                      fontFamily: "Times ",
                      fontSize: "20px",
                      color: " Red",
                    }}
                  >
                    NorthWest Missouri State University
                  </h5>
                  <span
                    className="qualification__subtitle"
                    style={{ color: "black" }}
                  >
                    Designed the administrative web application for "Soul Swipe"
                    using HTML, CSS, and JavaScript, seamlessly integrated with
                    Cloud Fire store. This platform equips administrators with
                    extensive tools for overseeing partner seekers' information,
                    reviewing reports, and exercising control over account
                    blocking..Built the administrative web application for "Soul
                    Swipe" utilizing HTML, CSS, and JavaScript (ES6).Utilized
                    Cloud Fire store for streamlined data storage and
                    retrieval.Provided administrators with robust tools for
                    overseeing partner seekers' details and evaluating
                    reports.Enforced account blocking functionality to ensure
                    effective content moderation.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt">
                      <span> 04/21/2023- 12/09/2023</span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
