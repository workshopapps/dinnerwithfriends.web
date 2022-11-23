import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenu } from "react-icons/bi"
import Dp from "../assets/img/m-img.png";

const SecondNavbar = () => {
  return (
    <div className="border-b pb-5 px-8 my-5">
      <div className="flex justify-between">
        <Link to="/" className="flex items-center">
          <span className="self-center text-blue-700 text-3xl font-semibold whitespace-nowrap ">
            Catch
          </span>
          <span className="self-center text-black text-3xl font-semibold whitespace-nowrap">
            Up
          </span>
        </Link>
        <div className="md:flex hidden items-center">
          <img src={Dp} alt="Dp" className="mr-4" />
          <IoIosArrowDown className="cursor-pointer" />
        </div>
        <div className="md:hidden flex items-center">
          <BiMenu className="text-3xl" />
        </div>

      </div>
    </div>
  );
};

export default SecondNavbar;
