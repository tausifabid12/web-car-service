import React from "react";
import Services from "../../SharedComponents/Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Home;
