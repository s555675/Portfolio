import React, { useRef } from "react";
import { Skills } from "./Skills";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/project" element={<Projects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
};

export default App;
