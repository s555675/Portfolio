import React from "react";
import img from './JNTUK.jpg';
import img1 from './NWMSU.jpg';
import './Education.css';

export function Education() {
    return (


        <div>
            <h1 style={{ marginTop: "900px", textAlign: 'center', fontSize: '50px' }}> Educational<span> Qualifications</span> </h1>
            <section className="edu" >
                <div className="Container">
                    <div className="card" style={{ clr: '#009688' }}>
                        <div className="imgbox">
                            <img src={img} alt="" width='310px' height='200px' />
                        </div>
                        <div className="content">
                            <h2>Computer Science Engineering</h2>
                            <a href="#"> Read more</a>
                            <p>In 2021, I pursued my undergraduate studies at JNTUK, maintaining a GPA of 3.7 across all four
                                years. Actively engaging in workshops and completing internships, I honed practical skills
                                alongside my academic endeavors. Undertaking various projects, I applied theoretical knowledge
                                to real-world scenarios,During my tenure, I served as Student President for two years,
                                spearheading initiatives to enhance student welfare and promote extracurricular involvement.
                                This leadership role refined communication and organizational skills. My holistic experience at
                                JNTUK, blending academic excellence, extracurricular engagement, and leadership contributions.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="Container">
                    <div className="card" style={{ clr: '#009688' }}>
                        <div className="imgbox">
                            <img src={img1} alt="" width="310px" height="200px" />
                        </div>
                        <div className="content">
                            <h2> Applied Computer Science </h2>
                            <a href="#"> Read more</a>
                            <p>In 2023, I pursued my Masters studies at Northwest Missouri State University (NWMSU), maintaining a
                                3.65 GPA. I actively participated in projects, applying theoretical knowledge practically. I held
                                leadership roles, initiating efforts to enhance student welfare and community engagement. These
                                experiences refined my communication, teamwork, and organizational skills.Overall, my time at NWMSU
                                was marked by academic excellence, extracurricular involvement, and leadership contributions. With a
                                3.7 GPA and diverse experiences, I've developed a well-rounded skill set and a solid foundation for
                                future endeavors.
                            </p>

                        </div>
                    </div>
                </div>
            </section >
        </div >

    )
}