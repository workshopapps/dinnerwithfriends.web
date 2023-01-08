import React from "react";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { termsData } from "./termsData";

const TermsOfUse = () => {
  const [active, setActive] = useState("The Agreement");

  const handleActive = (query) => {
    setActive(query);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-end lg:flex-wrap flex-col mx-4 lg:flex-row lg:mx-8 m-5 pt-20 mb-[100px]">
        <div className="lg:w-4/6 w-full m-2 lg:px-4">
          <p className="mb-5 font-bold text-3xl">Terms of Use</p>
          <p className="mt-2 text-sm font-medium">
            This document was last updated 15th of December, 2022. To start
            using our product, read this Terms and Conditions thoroughly.
          </p>
        </div>

        <div className="lg:w-2/6 sm:w-auto lg:sticky h-full top-0 static px-2 lg:-mt-24 mt-10 my-20">
          <h3 className="text-xl font-bold">Content</h3>
          <ul>
            {termsData.map((term) => {
              return (
                <li className="my-5" key={term.id}>
                  <a
                    className={`my-4 font-medium text-base hover:text-blue-800 ${
                      active === term.heading ? "text-[#0056D6]" : ""
                    }`}
                    href={`#${term.heading}`}
                    onClick={() => handleActive(term.heading)}
                  >
                    {term.heading}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:w-4/6 w-auto p-2 lg:pr-10 lg:mt-auto mt-10">
          {termsData.map((term) => {
            return (
              <div key={term.id} id={term.heading}>
                <h3 className="py-3 pt-10 font-semibold text-base">
                  {term.heading}
                </h3>
                {term.paragraphs.map((para, index) => {
                  return (
                    <p key={index} className="pt-2 pb-4 text-sm font-medium">
                      {para}
                      <a
                        className="text-[#0056D6]"
                        href={`mailto:${term.emailLink}`}
                      >
                        {term.emailLink && term.emailLink}
                      </a>
                    </p>
                  );
                })}
                <ul>
                  {term.lists &&
                    term.lists.map((listItem, index) => {
                      return (
                        <li key={index} className="list-disc">
                          {listItem}{" "}
                          <a
                            href={
                              term.links[index] === "catchup@gmail.com"
                                ? `mailto:${term.links[index]}`
                                : `https://${term.links[index]}`
                            }
                            className="text-[#0056D6]"
                          >
                            {term.links[index]}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfUse;
