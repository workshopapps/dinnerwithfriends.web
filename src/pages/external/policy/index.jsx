import React, { useState } from "react";
import {Footer} from "../../../components";
import Navbar from "../../../components/Navbar";
import { contentsData, policyData } from "./policyDatas";
import DOMPurity from "dompurify";

export const Policy = () => {
  const [active, setActive] = useState("Privacy Policy");
  const handleActive = (query) => {
    setActive(query);
  };

  const contents = contentsData.map((content, i) => (
    <a
      key={i}
      href={`#${content.href.replaceAll(" ", "-")}`}
      className={`lg:mb-[24px] mb-[16px] block text-[#424245] font-[400] text-[12px] lg:text-[14px] hover:text-[#1070FF] ${
        active === content.href ? "text-[#1070FF]" : "text-[#424245]"
      }`}
      onClick={() => handleActive(content.href)}
    >
      {content.href}
    </a>
  ));

  const policies = policyData.map((policy, i) => (
    <div key={i} id={policy.heading.replaceAll(" ", "-")}>
      <h2 className="mt-[24px] text-[#424245] text-[16px] lg:text-[20px] font-[500] lg:font-[700]">
        {policy.heading}{" "}
      </h2>
      <p className="leading-7 text-[#898989] text-[14px] lg:text-[16px] font-[500] lg:font-[400] my-4">
        {
          <div
            dangerouslySetInnerHTML={{ __html: DOMPurity.sanitize(policy.p) }}
          />
        }
      </p>
    </div>
  ));

  return (
    <>
      <Navbar />
      <section className="mt-24 px-[20px] lg:px-[80px] md:flex lg:mt-32 font-[Satoshi]">
        <div className="w-full md:w-[30%] mx-auto">
          <div className=" mb-4 md:hidden">
            <h2 className="text-[20px] mb-2 font-[500] md:text-3xl text-[#424245]">
              Privacy Policy
            </h2>
            <p className="text-[#898989] text-[14px] font-[500]">
              This document was last updated 15th of December, 2022. To start
              using our product, read this Privacy Policy thoroughly.
            </p>
          </div>
          <div className="md:sticky mb-[24px] lg:mb-[100px] top-[100px] bottom-0 min-h-min">
            <h2 className="mb-[24px] font-[500] mt-[26px] lg:mt-[1px] text-[16px] md:text-2xl md:mx-0">
              Contents
            </h2>
            {contents}
          </div>
        </div>

        <div className="w-full md:w-[70%] mb-20">
          <div className="hidden mb-4 md:block">
            <h2 className="text-2xl mb-2 font-[700] lg:text-[32px] text-[#424245]">
              Privacy Policy
            </h2>
            <p className="leading-7 text-[#898989] text-[16px] font-[400]">
              This document was last updated 15th of December, 2022. To start
              using our product, read this Privacy Policy thoroughly.
            </p>
          </div>
          <div>{policies}</div>
        </div>
      </section>
      <Footer />
    </>
  );
};
