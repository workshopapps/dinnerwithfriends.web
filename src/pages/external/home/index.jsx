import React from "react";
import Navbar from "../../../components/Navbar";
import { Footer } from "../../../components";
import { Hero, Schedule, Banner, Testimonials } from "./components";

export const Home = () => {

  return (
    <>
      <Navbar />
      <div className="bg-line-pattern  bg-cover bg-no-repeat lg:bg-top-4">
        <Hero />
        <Schedule />
        <Testimonials />
        <Banner />
      </div>
      <Footer />
    </>
  );
};

