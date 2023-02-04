import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Accordions from "./Accordions";
import people from "../../assets/img/faq-models.png";
import Button from "../../components/Button";
import {Footer} from "../../components";

const Faq = () => {
  return (
    <>
      <Navbar />
      <section className="mt-[90px] mb-[20px] lg:mt-[80px] lg:mx-[80px] lg:pt-[60px]">
        <div className="flex flex-col justify-center items-center gap-y-3 lg:gap-y-[24px] mb-16 lg:mb-18">
          <div className="hidden lg:block w-[46px] lg:w-[82px] h-15px lg:h-[30px]">
            <img className="w-[250px] mx-auto" src={people} alt="" />
          </div>
          <div className='flex flex-col justify-center items-center gap-y-[8px] lg:gap-y-[12px]'>
            <h2 className="text-[#151517] font-medium text-[1.25rem] lg:text-[2.5rem]">
              Frequently Asked Questions
            </h2>
            <p className="font-medium text-[#9F9F9F] text-[0.75rem] lg:text-[1.5rem]">
              Things you need to know about CatchUp
            </p>
          </div>
        </div>
        <div className="w-[90%] lg:w-6/12 m-auto">
          <Accordions />
        </div>
        <div className="h-[294px] mt-[64px] mb-[60px] lg:mb-[60px] lg:mt-[137px] w-[90%] lg:w-[80%] mx-auto bg-[#E7F0FF] rounded flex flex-col justify-center items-center gap-y-[10px] lg:gap-y-6">
          <div className=" mt-[64px] mb-[60px] lg:mb-[108px] lg:mt-[100px] w-[90%] lg:w-[80%] mx-auto bg-[#E7F0FF] rounded flex flex-col justify-center items-center gap-y-[10px] lg:gap-y-4">
            <div>
                <img className="w-50px"src={people} alt="" />
            </div>
            <h3 className="text-[#151517] font-medium text-[1.25rem]">Still have questions?</h3>
            <p className="text-[#717172] lg:text-[1.125rem] text-center">Can’t find the answer you’re looking for? Please, reach out to our friendly team.</p>
            <Button className='bg-[#1070FF] rounded py-2.5 lg:py-3 px-6 lg:px-8 mt-4'>
              <Link to='/contact-us' className="text-[#fff] font-medium">
                Get in touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faq;
