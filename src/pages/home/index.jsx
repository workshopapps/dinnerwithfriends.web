import React from "react";
import Navbar from "../../components/Navbar";
import {Footer} from "../../components";
import {Hero, Schedule, Banner} from "./components";
import Testimonials from "./testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Schedule />
      <Testimonials />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
