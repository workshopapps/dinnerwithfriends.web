import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Invitee = () => {
  return (
    <div>
      <Navbar />
      <div className=" my-28 mx-auto md:mx-32">
        <div className="mx-3 md:mx-0 text-center w-full">
          <h1 className="text-2xl font-bold md:text-3xl">Hello, there.</h1>
          <p className="leading-6 text-gray-600 font-sm">
            You have been invited to dinner by{" "}
            <span className="text-blue-700 font-bold"> Mathew Mathais.</span>
            <br /> You can view the details below..
          </p>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invitee;
