import React from "react";
import img from './Mannu.jpeg';
import './Home.css';

export function Home() {
    return (
        <div className="star">

            <nav>
                <a href="#" className="logo nav-brand"> Portfolio</a>
                <a href="" className="me-5">Home</a>
                <a href="" className="me-5">About</a>
                <a href="" className="me-5">Experience</a>
                <a href="" className="me-5">Projects</a>
                <a href="" className="me-5">Skills</a>
                <a href="" className="me-5">Education </a>
                <a href="" className="me-5">Contact</a>
                <span></span>
            </nav>
            <div className="detel">
                <h1>
                    I'm Ishaaq <span>Shaik </span>
                </h1>
                <h3> In am a Web Developer with Python </h3>
                <p>This is my official Website to shows all<br />Details about my education and work experience, my info .....
                </p>
                <a href="#" className="btn btn-color"> Download Resume</a>

                <div className="images">
                    <img src={img} className="shape" />

                </div>
            </div>

        </div>
    )
}