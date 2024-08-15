import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_umpj8bp",
      "template_d2yl32m",
      form.current,
      "DhHImJwVvadAQohx2"
    );
    // .then((result)=>{
    //     console.log(result.text);
    // }, (error)=>{
    //     console.log(error.text);
    // });
    e.target.reset();
    alert('form has been submitted')
  };

  const contactRef = useRef(null);
  const phoneNumber = "6605281917";
  const Linkedin = "i-shaik/";

  return (
    <div id="contact" ref={contactRef} className="row">
      <div className="col-6 d-flex">
        <section className="Contact" id="Contact">
          <div className="Contact-text">
            <h2>
              Contact<span>Me</span>
            </h2>
            <h4>Let's Work Together</h4>
            <p>
              Here is my Contact Information, <br />
              You can reach me out through my contact or Email. <br /> Thank
              You.
            </p>
            {/* <div className="Contact-list">
>>>>>>> second
                                <ul>
                                    <li> <i className="bx bxs-send"></i> ishaaqsk690@gmail.com</li>
                                    <li> <i className="bx bxs-phone"></i> +16605281917</li>
                                </ul>
                            </div> */}

            <div className="Contact-list">
              <ul>
                <li>
                  <i className="fas fa-envelope"></i>
                  {/* <i className="bx bxs-send"></i> ishaaqsk690@gmail.com */}
                  <a
                    href={`https://mail.google.com/mail/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="bx bxs-phone"></i> ishaaqsk690@gmail.com
                  </a>
                </li>
                {/* <li>
                  <i className="fab fa-whatsapp"></i>
                  <i className="bx bxs-phone"></i> +16605281917
                  <a
                    href="https://wa.me/16605281917"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li> */}
                <li>
                  <i className="fab fa-whatsapp"></i>

                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="bx bxs-phone"></i> Lets Connect
                  </a>
                </li>

                <li>
                  <i className="fab fa-linkedin"></i>
                  <i className="bx bxs-check"></i>{" "}
                  <a
                    href={`https://www.linkedin.com/in/${Linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="bx bxs-phone"></i> Ishaaq Shaik
                  </a>
                  {/* <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer"> */}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div
        className="col l-6"
        style={{ paddingTop: "250px", marginRight: "5rem" }}
      >
        <div className="Contact-form">
          <form ref={form} onSubmit={sendEmail} action="">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
            />
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              id=""
              cols="40"
              rows="10"
              placeholder="Enter your Message"
              required
            ></textarea>
            <button type="submit" className="send">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
