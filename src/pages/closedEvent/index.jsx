import React from "react";

import Navbar from "../../components/Navbar";
import {Footer} from "../../components";
import ClosedEventModal from "../../components/ClosedEventModal";

const index = () => {
  return (
    <div>
      <Navbar />
      <ClosedEventModal />
      <div className=" my-28 mx-auto md:mx-32">
        <div className="mx-3 md:mx-0 text-center w-full">
          <h1 className="text-2xl font-bold md:text-3xl">Hello, there.</h1>
          <p className="leading-6 text-gray-600 font-sm">
            You have been invited to dinner by{" "}
            <span className="text-[#0056D6] font-bold"> Mathew Mathais.</span>
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

export default index;
