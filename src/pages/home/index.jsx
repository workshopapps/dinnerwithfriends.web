import React from "react";
import Navbar from "../../components/Navbar";
import {Footer} from "../../components";
import {Hero, Schedule} from "./components";
import Testimonials from "./testimonials";
import Banner from "./banner";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Hero />
        <Schedule />
        <Testimonials />
      </div>
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
