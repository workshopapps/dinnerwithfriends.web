import React from "react";
import { Link } from "react-router-dom";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Logo from "./Logo";

const Footer = () => {
  const company = [
    { title: "Careers", to: "/careers" },
    { title: "About us", to: "/aboutUs" },
    { title: "Contact us", to: "/contact-us" },
  ];
  const learn = [
    { title: "How it Works", to: "/howitworks" },
  ];
  const legal = [
    { title: "Privacy Policy", to: "/policy" },
    { title: "Terms & Conditions", to: "/terms-of-use" },
  ];
  const help = [
    { title: "FAQs", to: "/faq" },
    { title: "Help Center", to: "/help" },
  ];

  return (
    <footer className="bg-[#0056D6] block md:flex">
      <div>
        <Logo footer className="mx-auto lg:mx-24 py-8 px-6"/>
        <div></div>
        {/* <Logo footer className="hidden md:block"/> */}
      </div>
      
      <div>
        <div className="mx-auto lg:mx-24 grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-5">
        <div>
          <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
            Company
          </h2>
          <ul className="text-gray-100">
            {company.map((item, i) => (
              <li className="mb-1 lg:mb-4" key={i}>
                <Link to={item.to} className=" hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
            Help center
          </h2>
          <ul className="text-gray-100">
            {learn.map((item, i) => (
              <li className="mb-1 lg:mb-4" key={i}>
                <Link to={item.to} className=" hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
            Legal
          </h2>
          <ul className="text-gray-100">
            {legal.map((item, i) => (
              <li className="mb-1 lg:mb-4" key={i}>
                <Link to={item.to} className=" hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
            Download
          </h2>
          <ul className="text-gray-100">
            {help.map((item, i) => (
              <li className="mb-1 lg:mb-4" key={i}>
                <Link to={item.to} className=" hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto lg:mx-24 py-6 px-4 md:flex md:items-center md:justify-between">
        <span className="text-md text-gray-100 sm:text-center">
          © 2022 <Link href="https://flowbite.com/">TEAM PRYBAR™</Link>. All
          Rights Reserved.
        </span>
        <div className="flex mt-1 text-md text-white space-x-6 sm:justify-center md:mt-0">
          Made with love <BsFillSuitHeartFill />
        </div>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
