import React from "react";
import Common from "../components/Common";
import web from "../images/web.jpg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with Us"
        imgsrc={web}
        btnname="Get Started"
        visit="/services"
      />
    </>
  );
};

export default Home;
