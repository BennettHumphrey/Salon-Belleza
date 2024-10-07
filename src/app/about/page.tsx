import React from "react";
import OurTeam from "./Components/OurTeam";
import OurStoryAbout from "./Components/OurStoryAbout";
import SubPageHeader from "../Components/SubPageHeader";

const About = () => {
  return (
    <div className="relative">
      <SubPageHeader src="/imgs/haircut-1.jpg" header="ABOUT US" />
      <OurTeam />
      <OurStoryAbout />
    </div>
  );
};

export default About;
