import React from "react";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import policyData from "../../pages/policy/policy";

const PrivacyPolicy = () => {
  const [active, setActive] = useState("Privacy Policy");

  const handleActive = (query) => {
    setActive(query);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-end lg:flex-wrap flex-col mx-4 lg:flex-row lg:mx-8 m-5 pt-20 mb-[100px]">
        <div className="lg:w-2/3 w-full m-2 lg:px-4">
          <p className="mb-5 font-bold text-3xl">Privacy Policy</p>
          <p className="mt-2 text-sm font-medium text-gray-600">
          This document was last updated 15th of December, 2022. To start using our product, read this Privacy Policy thoroughly.

          </p>
        </div>

        <div className="lg:w-1/3 lg:pl-16 sm:w-auto lg:sticky h-full top-0 static px-2 lg:-mt-24 mt-10 my-20">
          <h3 className="text-xl font-bold">Content</h3>
          <ul>
            {policyData.map((policy) => {
              return (
                <li className="my-5 text-600" key={policy.id}>
                  <a
                    className={`my-4 font-medium text-base hover:text-blue-800 ${
                      active === policy.heading ? "text-[#0056D6]" : ""
                    }`}
                    href={`#${policy.heading}`}
                    onClick={() => handleActive(policy.heading)}
                  >
                    {policy.heading}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:w-4/6 w-auto p-2 lg:pr-16 lg:mt-auto mt-10">
          {policyData.map((policy) => {
            return (
              <div key={policy.id} id={policy.heading}>
                <h3 className="py-3 pt-10 font-semibold text-base">
                  {policy.heading}
                </h3>
                <p className="text-gray-600">{policy.paragraphs}</p>
                <ul>
                  {policy.lists &&
                    policy.lists.map((listItem, index) => {
                      
                      return (
                        
                        <li key={index} className="list-disc text-gray-600">
                          {listItem}{" "}
                          
                            {/* <a
                            href={
                               policy.links[index] === "catchup@gmail.com"
                              
                                //  ? `mailto:${policy.links[0]}`
                                //   : `https://${policy.links[1]}`
                            }
                            className="text-[#0056D6]"
                          >
                            {policy.links}
                          </a>   */}
                        </li>
                       
                      );
                    })}
                </ul> 
                <div className="text-gray-600">{policy.para}</div>
                 <ul className="inline w-80">
                  {policy.link &&
                    policy.link.map((listItem, index) => {
                      
                      return (
                        
                        <li key={index} className="text-gray-600 inline">
                          {listItem}{" "}
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

export default PrivacyPolicy;
