import React from "react";
import { Link } from "react-router-dom";
import {BsFillSuitHeartFill} from "react-icons/bs"

const Footer = () => {
  const company = ['Careers','About us', 'Contact us', 'Partner with us']
  const learn = ['Blogs', 'Webinars', 'How it works']
  const legal = ['Security', 'Privacy policy', 'Cookies Setting', 'Terms & Conditions']
  const help = ['FAQs', 'Help Center', 'Customer support']

  return (
    <footer className="bg-blue-700">

      <div className="mx-auto lg:mx-24 grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-5">
        <div>
        <Link to="/" className="flex items-center">
            <span className="self-center text-white text-3xl font-semibold whitespace-nowrap ">
            Catch
            </span>
            <span className="self-center text-black text-3xl font-semibold whitespace-nowrap">
            Up
            </span>
          </Link>
        </div>
        <div>
          <h2 className="mb-3 lg:mb-6 text-sm font-semibold text-gray-100 uppercase">
            Company
          </h2>
          <ul className="text-gray-100">
            {company.map((e, i) => (
              <li key={i} className="mb-1 lg:mb-4">
              <Link href="#" className=" hover:underline">
                {e}
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
          {learn.map((e, i) => (
              <li key={i} className="mb-1 lg:mb-4">
              <Link href="#" className=" hover:underline">
                {e}
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
          {legal.map((e, i) => (
              <li key={i} className="mb-1 lg:mb-4">
              <Link href="#" className=" hover:underline">
                {e}
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
          {help.map((e, i) => (
              <li key={i} className="mb-1 lg:mb-4">
              <Link href="#" className=" hover:underline">
                {e}
              </Link>
            </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto lg:mx-24 py-6 px-4 md:flex md:items-center md:justify-between">
        <span className="text-md text-gray-100 sm:text-center">
          © 2022 <Link href="https://flowbite.com/">TEAM PRYBAR™</Link>. All Rights
          Reserved.
        </span>
        <div className="flex mt-1 text-md text-white space-x-6 sm:justify-center md:mt-0">
          Made with love <BsFillSuitHeartFill />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
