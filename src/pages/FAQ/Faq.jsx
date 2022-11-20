import React from "react";
import Navbar from "../../components/Navbar";
import Accordions from "./Accordions";
import people from '../../assets/img/faq-models.png'
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const Faq = () => {
  return (
    <>
      <Navbar />
        <section className="mt-[120px] lg:mt-[125px]">
          <div className="flex flex-col justify-center items-center gap-y-3 lg:gap-y-6 mb-16 lg:mb-40">
            <h2 className="text-[#151517] font-bold text-xl lg:text-5xl">Frequently Asked Questions</h2>
            <p className="text-[#9F9F9F] text-xs lg:text-2xl">Everything to know about Catch - Up</p>
          </div>
          <div className="w-[90%] lg:w-6/12 m-auto">
            <Accordions />
          </div>
          <div className="mt-[64px] mb-[60px] lg:mb-[108px] lg:mt-[137px] w-[90%] lg:w-[80%] mx-auto bg-[#E7F0FF] rounded flex flex-col justify-center items-center gap-y-[10px] lg:gap-y-6 py-5">
            <div className="w-[46px] lg:w-[82px] h-15px lg:h-[30px]">
                <img src={people} alt="" />
            </div>
            <h3 className="text-[#151517] font-bold text-xs lg:text-xl">Still have questions?</h3>
            <p className="text-[#717172] text-[6px] lg:text-lg">Can’t find the answer you’re looking for? Please, visit the Help Center for more help</p>
            <Button className='bg-[#1070FF] rounded py-2.5 lg:py-3 px-6 lg:px-8 text-[#fff] font-bold text-sm lg:text-xl'>
               Get in touch
            </Button>
          </div>
        </section>
        <Footer />
    </>
  )
}

export default Faq
