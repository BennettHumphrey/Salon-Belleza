import React from "react";
import OurTeam from "./Components/OurTeam/OurTeam";
import SubPageHeader from "../Components/SubPageHeader";
import Footer from "../Components/Footer/Footer";
import OurStoryAbout from "./Components/OurStoryAbout/OurStoryAbout";

const About = () => {
  return (
    <div className="relative">
      <SubPageHeader src="/imgs/haircut-1.webp" header="ABOUT US" />
      <OurTeam />
      <OurStoryAbout />
      <Footer  />
    </div>
  );
};

export default About;
