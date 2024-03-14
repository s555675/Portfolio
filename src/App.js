import React from "react";
import { Skills } from "./Skills";
import { Home } from "./Home";
import { About } from "./About"
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { Experience } from "./Experience";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

export default App;
