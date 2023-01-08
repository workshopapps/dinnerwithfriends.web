// import React from "react";
import google from "../../assets/img/google.png";
import elipse from "../../assets/img/elipse.png";
import elipse2 from "../../assets/img/elipse2.png";
import HitIcon from "../../assets/img/HitIcon.png";
// import video from "../../assets/img/video.png";

export default function Howitwork2() {
  return (
    <div className="container max-w-full p-8 mx-auto relative">
      <div className="max-md:py-20 max-sm:py-20">
        <h1 className=" mb-8 text-4xl font-bold text-center">
          Watch how easy it is to create your next get-together
        </h1>
        <div className="w-full mb-[88px] lg:mb-[144px]">
          <video
            controls
            className="w-full"
            autoPlay
            loop
            src="https://player.vimeo.com/external/414291591.sd.mp4?s=0e5f7a63156c329e28a9c3edc3847e53825974e9&profile_id=164&oauth2_token_id=57447761"
          />
        </div>
        <section className="bg-[#E7F0FF] py-4 lg:p-10 max-md:py-20 max-md:flex max-md:flex-col ">
          <div className=" grid grid-cols-1 gap-5 px-2 max-md:px-8 lg:grid-cols-2">
            <div
              className="flex flex-col bg-[#fff] items-center border border-gray-300 px-4
           py-8 max-w[538px]  mx-auto text-center  lg:text-start lg:flex-row  lg:py-7"
            >
              <img src={google} className="p-6 w-40 h-40 " alt="img" />
              <div className="flex flex-col w-11/12">
                <h1 className="text-lg text-[#0056D6] font-bold">
                  Sync with google calender
                </h1>
                <p className="max-sm:text-center">
                  {" "}
                  Catch up allows you to sync your google calender, in order for
                  you to schedule your event and availability.
                </p>
              </div>
            </div>
            <div className="flex bg-[#fff] flex-col  items-center border border-gray-300 px-4 py-8 max-w[538px]  mx-auto text-center lg:text-start lg:flex-row lg:py-7 ">
              <img src={elipse} className="p-6 w-40 h-40 " alt="img" />
              <div className="flex flex-col w-11/12">
                <h1 className="text-lg text-[#0056D6] font-bold">
                  Create an account
                </h1>
                <p className="max-sm:text-center">
                  {" "}
                  You can easily create an account with your mobile number We
                  will send you an SMS to confirm your number and then you can
                  start creatcreating your hangout.
                </p>
              </div>
            </div>
            <div className="flex bg-[#fff] flex-col  items-center border border-gray-300 px-4 py-8 max-w[538px]  mx-auto text-center lg:text-start lg:flex-row  lg:py-7">
              <img src={HitIcon} className="p-6  w-40 h-40" alt="img" />
              <div className="flex flex-col w-11/12">
                <h1 className="text-lg text-[#0056D6] font-bold">
                  Hit the “+” icon to start an invitation
                </h1>
                <p className="max-sm:text-center">
                  {" "}
                  Once you’re in the app, all you have to do is hit the ‘+’ icon
                  to start adding the details of your next get together.
                </p>
              </div>
            </div>
            <div className="flex bg-[#fff] flex-col  items-center border border-gray-300 px-4 py-8 max-w[538px]  mx-auto text-center lg:text-start lg:flex-row  lg:py-7">
              <img src={elipse2} className="p-6 w-40 h-40 " alt="img" />
              <div className="flex flex-col w-11/12">
                <h1 className="text-lg text-[#0056D6] font-bold">
                  Add invitees from your contacts
                </h1>
                <p className="max-sm:text-center">
                  {" "}
                  You can add as many invitees from your contact list and then
                  finalize on your gathering. Each person will be able to see
                  your get together details, they can accept or decline requests
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className=" flex justify-between px-3 pb-10 py-20 flex-col lg:flex-row gap-8">
          <div>
            <h1 className="text-2xl md:text-5xl text-[#0056D6] font-bold max-md:text-base">
              Still have questions ?
            </h1>
            <p className="text-base py-3 max-md:text-start max-md:text-base ">
              Send us any questions you may have about Catch Up and we’ll
              <br /> get back to you quickly.
            </p>
          </div>
          <div>
            <form>

                <input
                  className=" border border-gray-300 p-4 w-full mt-6 rounded-lg  bg-transparent outline-none"
                  type="text"
                  placeholder="Enter your Name"
                />

              <input
                className="border border-gray-300 p-4 w-full mt-6 rounded-lg  bg-transparent outline-none"
                type="email"
                placeholder="Enter your email"
              />
              <textarea
                className=" border border-gray-300 pb-20 pl-3  pt-3 mt-5 w-full rounded-lg bg-transparent outline-none"
                placeholder="Enter a description..."
              />
              <button className="w-full text-white bg-[#0056D6] rounded-lg p-3 mt-6">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
