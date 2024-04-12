import React, { useRef } from "react";
import "./About.css";
// import aboutRef from "./App.js";

export function About() {
  const aboutRef = useRef(null);
  return (
    <div id="about" ref={aboutRef}>
      <section className="about">
        <div className="about-container">
          <h1 className="about-heading">
            About <span>Me</span>
          </h1>
          <h4 className="about-caption">Web Developer and Python Developer</h4>
          <p className="about-content">
            Experienced Front-End Developer with a proven track record in
            creating responsive and user-friendly interfaces. Proficient in
            HTML5, CSS3,and JavaScript, withprogramming Language .And expertise
            in React.js for dynamic content rendering. Moreover i have hands on
            experience in Python Skilled in mobile development using Kotlin, and
            experienced indatabase management withMySQL, MongoDB, and Google
            Firestore. Well-versed in cloud technologies, including AWS,
            andadept atoperating systems like Windows, macOS, and Linux. Strong
            background in projectmanagement, agile methodologies, and
            collaborative tools like JIRA and Git. Coming to my experience I am
            a full stack developer with a bachelor's degree in computer science
            and a master's degree in applied computer science (expected
            graduation in Dec 2023). I have worked as a full stack developer at
            Tata Consultancy Services (TCS) from Mar 2020 to Oct 2022, where I
            used Python, HTML/CSS, JavaScript, jQuery, and firebase database to
            develop and enhance web applications for the collections team.At
            TCS, I contributed to the automation of report scheduling, which
            reduced manual effort by 60+ minutes daily and improved efficiency
            and accuracy. I also designed a project in AWS Cloud for
            TCS-INFRAMIND, which aimed to reduce CPU utilization as the number
            of users increased. I am passionate about learning new technologies
            and applying them to solve real-world problems. I value teamwork,
            innovation, and customer satisfaction, and I believe I can bring
            diverse perspectives and experiences to the organization.
          </p>
        </div>
      </section>
    </div>
  );
}
