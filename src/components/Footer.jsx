import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import Logo from "./Logo";

const Footer = () => {
  const company = [
    { title: "Feature", to: "/feature" },
    { title: "Contact us", to: "/contact-us" },
  ];
  const help = [
    { title: "FAQs", to: "/faq" },
    { title: "How it Works", to: "/howitworks" },
  ];
  const legal = [
    { title: "Privacy Policy", to: "/policy" },
    { title: "Terms & Conditions", to: "/terms-of-use" },
  ];
  return (
    <footer className="bg-[#0056D6] overflow-hidden">
      <div className="block md:flex justify-between ">
        <div>
          <Logo footer className="mx-auto lg:mx-20 py-8 px-6" />
        </div>

        <div>
          <div className="mx-auto lg:mx-24 grid grid-cols-2 gap-8 md:gap-12 py-8 px-6 md:grid-cols-3">
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
                Help
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
          </div>
        </div>
      </div>
      <div className="mx-auto lg:mx-24 py-6 px-4 text-center gap-4 flex flex-col-reverse  md:flex md:flex-row md:items-center md:justify-between">
        <span className="text-md text-gray-100 sm:text-center">
          © 2022 <Link href="/">Team CatchUp™</Link>
        </span>
        <div className="flex mt-1 text-md text-white text-center space-x-12 justify-center md:mt-0">
          <a href="https://www.facebook.com/profile.php?id=100088950369086&mibextid=LQQJ4d">
            <BsFacebook />
          </a>
          <a href="https://twitter.com/justcatchup">
            <BsTwitter />
          </a>
          <a href="https://www.linkedin.com/company/justcatchup/">
            <BsLinkedin />
          </a>
          <a href="/">
            <BsYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
