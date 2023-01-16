import React, { useEffect } from "react";
import { Footer } from "../../../../../components";
import Navbar from "../../../../../components/Navbar";
import { ContactUsDetails } from "../contactDetails";
import { ContactUsForm } from "../contactUsForm";

export const ContactUsComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" w-full  mx-auto">
      <Navbar />
      <div className="w-full h-[300px] text-white mt-20 bg-contact-us bg-no-repeat bg-cover flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-bold md:mb-[0.5rem]">
        <h3 className="text-5xl font-light text-[#b8b8b8]">Get in touch</h3>
        <p className="text-[#b8b8b8] mt-[0.5rem] font-light">
          We will answer your questions and provide solutions to your
          problems
        </p>
      </div>
      <div className="w-full flex md:flex-row-reverse md:justify-between px-6 flex-col py-16 sm:px-8 lg:px-12 xl:px-24 2xl:px-44">
        <ContactUsForm />
        <ContactUsDetails />
      </div>
      <Footer />
    </section>
  );
};

