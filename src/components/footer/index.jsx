import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import Logo from "./Logo";

const Footer = () => {

  const company = companyData.map((item, i) => (
    <li className="mb-1 lg:mb-4" key={i}>
      <Link to={item.to} className=" hover:underline">
        {item.title}
      </Link>
    </li>
  ))

  const help = helpData.map((item, i) => (
    <li className="mb-1 lg:mb-4" key={i}>
      <Link to={item.to} className=" hover:underline">
        {item.title}
      </Link>
    </li>
  ))

  const legal = legalData.map((item, i) => (
    <li className="mb-1 lg:mb-4" key={i}>
      <Link to={item.to} className=" hover:underline">
        {item.title}
      </Link>
    </li>
  ))


  return (
    <footer className="bg-[#0056D6] overflow-hidden">
      <div className="block md:flex justify-between ">
        <Logo footer className="mx-auto lg:mx-20 py-8 px-6" />
          <div className="mx-auto lg:mx-24 grid grid-cols-2 gap-8 md:gap-12 py-8 px-6 md:grid-cols-3">
            <div>
              <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
                Company
              </h2>
              <ul className="text-gray-100">
                {company}
              </ul>
            </div>
            <div>
              <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
                Help
              </h2>
              <ul className="text-gray-100">
                {help}
              </ul>
            </div>
            <div>
              <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
                Legal
              </h2>
              <ul className="text-gray-100">
                {legal}
              </ul>
            </div>
          </div>

      </div>
      <div className="mx-auto lg:mx-24 py-6 px-4 text-center gap-4 flex flex-col-reverse  md:flex md:flex-row md:items-center md:justify-between">
        <span className="text-md text-gray-100 sm:text-center">
          © 2022 <Link href="https://flowbite.com/">Team CatchUp™</Link>
        </span>
        <div className="flex mt-1 text-md text-white text-center space-x-12 justify-center md:mt-0">
          <BsFacebook />
          <BsTwitter />
          <BsLinkedin />
          <BsYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
