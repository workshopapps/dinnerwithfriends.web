import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Policy = () => {
  const [active, setActive] = useState("Privacy Policy");

  const handleActive = (query) => {
    setActive(query);
  };

  return (
    <>
      <Navbar />
    <section className="mx-auto text-black mt-24 lg:px-[80px] md:flex lg:mt-32">
        <div className="w-full md:w-[30%] ">
          <div className="mx-3 mb-4 md:hidden md:mx-0">
            <h1 className="text-2xl mb-2 font-bold md:text-3xl">
              Privacy Policy
            </h1>
            <p className="leading-7 text-gray-800 font-sm">
              This document was last updated 15th of December, 2022. To start
              using our product, read this Privacy Policy thoroughly.
            </p>
          </div>
          <div className="md:sticky mb-[100px] top-[100px] bottom-0 min-h-min">
            <h1 className="mb-[24px] text-xl md:text-2xl md:mx-0">Contents</h1>
            {contents.map((content, i) => (
              <a
                key={i}
                href={`#${content.href.replaceAll(" ", "-")}`}
                className={`mb-[24px] block text-[#424245] font-[400] text-[14px] hover:text-[#1070FF] ${
                  active === content.href ? "text-[#1070FF]" : "text-gray-800"
                }`}
                onClick={() => handleActive(content.href)}
              >
                {content.href}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[70%] md:mx-8 mb-20">
          <div className="hidden mb-4 md:block">
            <h1 className="text-2xl mb-2 font-[700] lg:text-[32px] text-[#424245]">
              Privacy Policy
            </h1>
            <p className="leading-7 text-[#898989] text-[16px] font-[400]">
              This document was last updated 15th of December, 2022. To start
              using our product, read this Privacy Policy thoroughly.
            </p>
          </div>
          <div className="mx-3 md:mx-0">
            {policies.map((policy, i) => (
              <div key={i}>
                <h2 id={policy.heading.replaceAll(" ", "-")} className="mt-[24px] text-[#424245] text-[20px] font-[700]">{policy.heading} </h2>
                <p className="leading-7 text-[#898989] text-[16px] font-[400] my-4">{policy.p}</p>
              </div>
            ))}
          </div>
        </div>


    </section>
      <Footer />
      </>
  );
};

export default Policy;
