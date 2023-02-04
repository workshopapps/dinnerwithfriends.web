import React from "react";
import { Link } from "react-router-dom";
import { companyData, helpData, legalData } from "./footerData";
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import Logo from "../Logo";

export const Footer = () => {
  const company = companyData.map((item, i) => (
    <li className="mb-1 lg:mb-4" key={i}>
      <Link to={item.to} className=" hover:underline">
        {item.title}
      </Link>
    </li>
  ));

  const help = helpData.map((item, i) => (
    <li className="mb-1 lg:mb-4" key={i}>
      <Link to={item.to} className=" hover:underline">
        {item.title}
      </Link>
    </li>
  ));

  const legal = legalData.map((item, i) => (
    <li className="mb-1 lg:mb-4" key={i}>
      <Link to={item.to} className=" hover:underline">
        {item.title}
      </Link>
    </li>
  ));

  return (
    <footer className="bg-[#1070FF] overflow-hidden px-[28px] mb:px-[64px] pt-[56px] pb-[62px]">
      {/* <div className="block lg:flex justify-between "> */}
      <div className="block md:flex gap-8 justify-between ">
        <div>
          <Logo footer className="mb-8" />
        </div>
        <div>
          <div className="mx-auto grid grid-cols-2 gap-8 lg:gap-12 lg:grid-cols-3">
            <div>
              <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
                Company
              </h2>
              <ul className="text-gray-100">{company}</ul>
            </div>
            <div>
              <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
                Help
              </h2>
              <ul className="text-gray-100">{help}</ul>
            </div>
            <div>
              <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
                Legal
              </h2>
              <ul className="text-gray-100">{legal}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-6 text-center gap-4 flex flex-col-reverse  md:flex md:flex-row md:items-center md:justify-between">
        <span className="text-md text-gray-100 sm:text-center">
          © 2023 <Link href="/">Team CatchUp™</Link>
        </span>
        <div className="flex mt-1 text-md text-white text-center space-x-8 justify-center md:mt-0">
          <a href="https://www.facebook.com/profile.php?id=100088950369086&mibextid=LQQJ4d">
            <BsFacebook />
          </a>
          <a href="https://twitter.com/justcatchup">
            <BsTwitter />
          </a>
          <a href="https://www.linkedin.com/company/justcatchup/">
            <BsLinkedin />
          </a>
          <a href="https://youtube.com/@justcatchup">
            <BsYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};
