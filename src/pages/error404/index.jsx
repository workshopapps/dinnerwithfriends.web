import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import {Footer} from "../../components";

import SubHome from "../../assets/img/SubHome.png";
import errorImg from "../../assets/img/errorImg.png";
import SubError from "../../assets/img/SubError.png";
import ArrowRight from "../../assets/img/ArrowRight.png";

const Error404 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-line-pattern mt-20 my-12 mx-auto w-[95%] tablet:w-[93%] lg:w-[96%] xl:w-[86%]">
        <div className="flex justify-end">
          <img src={SubHome} alt="" className="w-fit" />
        </div>
        <div>
          <div className="md:flex text-center md:text-left">
            <div className="w-[85%] mx-auto md:w-2/4">
              <h2 className="text-4xl font-bold my-10 md:mb-5 md:text-3xl lg:text-5xl">
                Oops! Error 404
              </h2>
              <p className="text-2xl font-bold md:text-lg lg:text-2xl lg:py-5 text-[#717172]">
                We can’t seem to find the page you’re looking for, Let’s help
                you get somewhere even better.
              </p>
              <button className="bg-[#0056D6] font-bold hover:bg-[#0056D6a1] transition-all duration-300 my-8 py-4 px-8 md:py-3 md:px-6 rounded text-white text-md">
                <Link to="/">Return Home</Link>
              </button>
            </div>
            <div className="md:w-[50%]">
              <img src={errorImg} alt="" className="mx-auto md:w-full" />
            </div>
          </div>
          <div>
            <div className="border border-[#BCD7FF] cursor-pointer flex items-center justify-between px-3 py-2 rounded  w-[65%] md:w-[35%] lg:w-[25%]">
              <div className="img w-[30%]">
                <img src={SubError} alt="" className="mx-auto w-full" />
              </div>
              <div>
                <p className="text-[12px] text-[#717172] font-normal">
                  New event
                </p>
                <p className="text-[13px] ">Add more friends</p>
              </div>
              <div className="arrow w-[10%]">
                <img src={ArrowRight} alt="" className="mx-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
