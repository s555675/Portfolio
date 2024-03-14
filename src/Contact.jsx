import React from "react";
import './Contact.css';


export function Contact() {
    return (
        <div className="row">

            <div className="col-6 d-flex" >
                <section className="Contact" id="Contact">
                    <div className="Contact-text">
                        <h2>Contact<span>Me</span></h2>
                        <h4>Let's Work Together</h4>
                        <p>Here is my Contact Information, <br />You can reach me out through my contact or Email. <br /> Thank You.</p>
                        {/* <div className="Contact-list">
                                <ul>
                                    <li> <i className="bx bxs-send"></i> ishaaqsk690@gmail.com</li>
                                    <li> <i className="bx bxs-phone"></i> +16605281917</li>
                                </ul>
                            </div> */}

                        <div className="Contact-list">
                            <ul>
                                <li>
                                    <i className="fas fa-envelope"></i>
                                    <i className="bx bxs-send"></i> ishaaqsk690@gmail.com
                                    <a href="mailto:ishaaqsk690@gmail.com" target="_blank" rel="noopener noreferrer">

                                    </a>
                                </li>
                                <li>
                                    <i className="fab fa-whatsapp"></i>
                                    <i className="bx bxs-phone"></i> +16605281917
                                    <a href="https://wa.me/16605281917" target="_blank" rel="noopener noreferrer">

                                    </a>
                                </li>
                                <li>
                                    <i className="fab fa-linkedin"></i>
                                    <i className="bx bxs-check"></i> https://www.linkedin.com/in/shaik-ishaaq/
                                    {/* <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer"> */}

                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
            </div>
            <div className="col l-6" style={{ paddingTop: '250px', marginRight: '5rem' }}>
                <div className="Contact-form">
                    <form action="">
                        <input type="text" placeholder="Enter Your Name" required />
                        <input type="email" placeholder="Enter Your Email" required />
                        <input type="text" placeholder="Enter your Subject" />
                        <textarea name="" id="" cols="40" rows="10" placeholder="Enter your Message" required></textarea>
                        <button type="submit" className="send">Send</button>
                    </form>
                </div>
            </div>
        </div>




    )
}
