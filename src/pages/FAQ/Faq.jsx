import React from "react";
import Navbar from "../../components/Navbar";
import Accordions from "./Accordions";

const Faq = () => {
  return (
    <>
      <Navbar />
        <section className="relative top-[96px] lg:top-[132px]">
          <div className="flex flex-col justify-center items-center gap-y-3 lg:gap-y-6 mb-16 lg:mb-40">
            <h2 className="text-[#151517] font-bold text-xl lg:text-5xl">Frequently Asked Questions</h2>
            <p className="text-[#9F9F9F] text-xs lg:text-2xl">Everything to know about Catch - Up</p>
          </div>
          <div className="w-[90%] lg:w-6/12 m-auto">
            <Accordions />
          </div>
          <div className="mt-[64px] lg:mt-[137px] w-[90%] lg:w-[80%] mx-auto bg-[#E7F0FF] rounded flex flex-col justify-center items-center gap-y-[10px] lg:gap-y-6 py-5">
            <div>
                <img src="" alt="" />
            </div>
          </div>
        </section>
    </>
  )
}

export default Faq
