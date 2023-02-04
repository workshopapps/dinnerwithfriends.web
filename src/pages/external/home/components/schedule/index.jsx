import React from "react";
import ScheduleImage from "../../../../../assets/img/homepage1.png";
import Dashboard1 from "../../../../../assets/img/homepage2.png";
import Dashboard2 from "../../../../../assets/img/homepage3.png";

export const Schedule = () => {
  return (
    <section className='mt-[48px] lg:mt-[64px] px-[16px] lg:px-[6rem]'>
        <h2 className="lg:w-[70%] m-auto text-[#1070FF] text-center leading-[2.87rem] lg:leading-[4.5rem] font-bold text-[2.12rem] lg:text-[3.5rem]">
           Stay connected with your social circle
        </h2>
        <div className="flex flex-col justify-between items-center gap-y-[48px] lg:gap-y-[72px] mt-[40px] lg:mt-[80px]">
          <div className="flex justify-between lg:gap-x-[8rem]">
            <div className="flex flex-col justify-start items-start gap-y-[8px] lg:gap-y-[16px] lg:basis-2/4">
              <h3 className="text-[#1070FF] leading-[2rem] lg:leading-[2.5rem] font-medium lg:font-bold text-[1.5rem] lg:text-[2rem]">
                Stay connected with your social circle
              </h3>
              <p className="text-[#717172] lg:text-[1.5rem] leading-[1.68rem] lg:leading-[2.5rem]">
                CatchUp allows you to plan your next hangout—sports hangouts, dinner dates, coffee dates, and so much more. Plan get-togethers with friends without letting your hectic schedule get in the way. Find the best dates for everyone and make a decision together!
              </p>
            </div>
            <div className="hidden lg:flex basis-2/4">
              <img src={Dashboard2} alt="Home" className="object-cover"/>
            </div>
          </div>
          <div className="flex justify-between lg:gap-x-[8rem]">
            <div className="hidden lg:flex basis-2/4">
              <img src={Dashboard1} alt="Home" className="object-cover"/>
            </div>
            <div className="flex flex-col justify-start items-start gap-y-[8px] lg:gap-y-[16px] lg:basis-2/4">
              <h3 className="text-[#1070FF] leading-[2rem] lg:leading-[2.5rem] font-medium lg:font-bold text-[1.5rem] lg:text-[2rem]">
                Select your preferred date and time
              </h3>
              <p className="text-[#717172] lg:text-[1.5rem] leading-[1.68rem] lg:leading-[2.5rem]">
                You have the freedom to choose your availability with CatchUp. Friends can let you know if they can attend your event, and you'll immediately be notified on our site and in your mail.
              </p>
            </div>
          </div>
          <div className="flex justify-between lg:gap-x-[8rem]">
            <div className="flex flex-col justify-start items-start gap-y-[8px] lg:gap-y-[16px] lg:basis-2/4">
              <h3 className="text-[#1070FF] leading-[2rem] lg:leading-[2.5rem] font-medium lg:font-bold text-[1.5rem] lg:text-[2rem]">
                Stay in sync
              </h3>
              <p className="text-[#717172] lg:text-[1.5rem] leading-[1.68rem] lg:leading-[2.5rem]">
                You can integrate your calendar on CatchUp with a single click. You also get notifications for all of your activities in one place. You never have to worry about missing an event.
              </p>
            </div>
            <div className="hidden lg:flex basis-2/4">
              <img src={ScheduleImage} alt="Home" className="object-cover"/>
            </div>
          </div>
        </div>
    </section>
  );
};
