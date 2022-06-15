import React from "react";
import Common from "../components/Common";
import webb from "../images/webb.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page of"
        imgsrc={webb}
        btnname="Contact Us"
        visit="/contact"
      />
    </>
  );
};

export default About;
