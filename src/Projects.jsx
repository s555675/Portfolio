// import React, { useRef } from "react";
// import "./Projects.css";

// export function Projects() {
//   const projectRef = useRef(null);
//   return (
//     <div id="projects" ref={projectRef}>
//       <section>
//         <div className="services" id="services">
//           <div className="container">
//             <h1 className="sub-title">
//               {" "}
//               My <span>Projects</span>
//             </h1>
//             <div className="service-list">
//               <div>
//                 <i className=""></i>
//                 <h2>Object Detection</h2>
//                 <p>
//                   Object Detection is based on the Python-based.The project
//                   utilized a combination of OpenCV, NumPy, Pandas, Terraform,
//                   and Anaconda for image processing, data analysis,
//                   infrastructure automation, and development. Additionally, code
//                   was deployed onto Raspberry Pi 10x devices This integration of
//                   diverse technologies culminated in a robust and scalable
//                   solution that met the demands of our project objectives
//                   effectively for real-time data processing at the edge. This
//                   integration of tools and technologies resulted in a robust and
//                   scalable solution to meet project objectives efficiently.{" "}
//                   <br />
//                   <br />
//                   Tools & Technologies: Python, OpenCV,NumPy,Pandas,
//                   Anaconda,Raspberry Pi 10x.
//                 </p>
//                 {/* <a href="#" className="read1" style={{ marginTop: "50px" }}>
//                   learn more{" "}
//                 </a> */}
//               </div>
//               <div>
//                 <i className=""></i>
//                 <h2> E-Library Managment</h2>
//                 <p>
//                   E-Library Management is an Android app designed to streamline
//                   access to the e-library system, allowing users to efficiently
//                   search for books, articles, and research papers. The
//                   application enables users to reserve books by author and
//                   publication, book study rooms, and employs a color-coded
//                   system to signify the status of books. Engineered with
//                   multiple. screens and utilizing SQLite for CRUD operations.•
//                   Implemented advanced UI concepts for continuous enhancement of
//                   user satisfaction in collaboration with Java and Kotlin.
//                   comprehensive solution for effective e-library management..{" "}
//                   <br />
//                   <br /> Tools & Technologies: Android, Java, Kotlin, Android
//                   Studio, SQLite, Git, GitHub
//                 </p>
//                 <br />
//                 {/* <a href="#" className="read2" style={{ marginTop: "14px" }}>
//                   learn more{" "}
//                 </a> */}
//               </div>
//               <div>
//                 <i className=""></i>
//                 <h2> Mern Stack Project</h2>
//                 <p>
//                   Created a responsive e-commerce platform using HTML, CSS, and
//                   React.js, ensuring an intuitive user interface for seamless
//                   browsing. Implemented a RESTful API with Express.js,
//                   integrated MongoDB for efficient data storage, and optimized
//                   schemas for performance. Deployed the site, Deployed the
//                   e-commerce website on cloud platforms like Heroku, ensuring
//                   global accessibility and reliability. on Heroku for global
//                   accessibility, utilizing Git for collaborative development and
//                   efficient version control.
//                   <br />
//                   <br />
//                   Tools & Technologies: HTML, CSS, JavaScript (ES6), React JS,
//                   Node JS, Express JS, RESTful APIs, Mongo DB, Heroku, Git,
//                   GitHub
//                 </p>
//                 <br />
//                 <br />
//                 {/* <a href="#" className="read3" style={{ marginTop: "14px" }}>
//                   learn more{" "}
//                 </a> */}
//               </div>
//               <div>
//                 <i className=""></i>
//                 <h2>Soul Swipe</h2>
//                 <p>
//                   "Soul Swipe," Built the administrative web application for
//                   "Soul Swipe" utilizing HTML, CSS, and JavaScript
//                   (ES6).Utilized Cloud Fire store for streamlined data storage
//                   and retrieval Provided administrators with robust tools for
//                   overseeing partner seekers' details and evaluating reports
//                   Enforced account blocking functionality to ensure effective
//                   content moderation.Facilitated administrators in sending
//                   messages and notifications to users regarding app
//                   updates.Ensured an intuitive interface for effortless
//                   navigation and effective data administration.Tools &
//                   Technologies: HTML5, CSS3, Bootstrap, JavaScript (ES6), Cloud
//                   all app users.. <br />
//                   <br />• Tools & Technologies: HTML5, CSS3, Bootstrap,
//                   JavaScript (ES6), Cloud Fire store, JIRA, Git, GitHub, VS
//                   Code.
//                 </p>
//                 {/* <a href="#" className="read4">
//                   learn more{" "}
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import "./Projects.css";
import { Data } from "../src/Data";
import { Carousel } from "react-bootstrap";
// import { ScrollDown } from './scrolldown.jsx';

export function Projects() {
  return (
    <div>
      <section
        id="projects"
        className="projects container section"
        style={{ display: "grid", placeItems: "center" }}
      >
        <h1 className="sub-title">
          My <span>Projects</span>
        </h1>
        <span className="section_subtitle">
          <h3> My experience with different projects</h3>
        </span>
        <Carousel
          className="projects__container"
          indicators={true} // Show pagination indicators
          interval={null} // Disable auto sliding
        >
          {Data.map(({ id, image, title, description }) => {
            return (
              <Carousel.Item key={id}>
                <div className="carousel-image-container">
                  <img
                    className="d-block w-100 carousel-image"
                    src={image}
                    alt=""
                  />
                  <div className="image-overlay"></div>
                </div>
                <Carousel.Caption>
                  <h3 className="projects__name">{title}</h3>
                  <p className="projects__description">{description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
      {/* <ScrollDown/> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}