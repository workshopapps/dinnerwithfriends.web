import React from "react";

import image1 from "../../../../../assets/img/test1.png";
import image2 from "../../../../../assets/img/test2.png";
import image3 from "../../../../../assets/img/test3.png";
import image4 from "../../../../../assets/img/test4.png";

export const Testimonials = () => {
  const testimonies = [
    {
      img: image1,
      name: "Martha James",
      job: "Operation Officer, Unilever",
      p: "'I found time I didn't know I had all thanks to CatchUp!' It takes a lot of time to manage an organization, attend meetings, and organize events. I barely have time to relax and unwind with friends. Now I can find time to work, rest and catch up with friends.",
      date: "3 days ago",
    },
    {
      img: image4,
      name: "Chisom Eze",
      job: "Operation Officer, Nestle",
      p: "'I finally had time to go on a date all thanks to CatchUp!' 'I had tried going on several dates, but somehow the schedules and timing did not always match mine. Thanks to CatchUp, I was able to plan and prepare for my date without having anything come up impromptu.'",
      date: "3 days ago",
    },
    {
      img: image2,
      name: "Adeyinka Adekola",
      job: "Account manager, UBA Bank",
      p: "'CatchUp helped me spend more time with my daughters. 'My schedule as an account manager does not leave much room to maintain a close relationship with my daughters. With CatchUp, I was able to spend more time with them even amidst my very busy schedule.'",
      date: "3 days ago",
    },
    {
      img: image3,
      name: "Karim Roomie",
      job: "Account manager, UBA Bank",
      p: "'I got to hang out with my guys after a long time!' 'Now I can take time out for myself and hang out with my friends even while raising kids and running my company. This has been an amazing experience. It has improved my mental health and allowed me to maintain a healthy work-life balance.'",
      date: "3 days ago",
    },
  ];
  return (
    <section className="relative flex flex-col justify-center items-center gap-y-[40px] lg:gap-y-[54px] py-[40px] lg:pt-[80px] px-[25px] lg:px-[95px] overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-y-[16px] lg:gap-y-[32px]">
        <h2 className="text-[#1070FF] text-center leading-[2.87rem] lg:leading-[5.5rem] font-bold text-[2.12rem] lg:text-[3.5rem] lg:px-[2rem]">
          Rekindling Bonds and Fostering Friendships.
        </h2>
        <p className="text-[#000000] leading-[2.06rem] lg:leading-[2.68rem] text-[1.25rem] text-center lg:text-[2rem]">
          Don't just take our word for it; read what others have to say about us.
        </p>
      </div>
        <div className="flex flex-col justify-center items-center lg:grid grid-cols-2 content-start lg:items-start lg:justify-between flex-wrap gap-y-[30px] lg:gap-x-[40px]">
          {testimonies.map((e, i) => (
            <div key={i} className="flex justify-start items-start flex-col lg:basis-[40%] p-[16px] lg:p-[32px] border border-[#B1B1B1] bg-[#FFFFFF] rounded-[8px] shadow-cardShadowMobile gap-y-[24px] lg:gap-y-[26px]">
              <div className="flex justify-start items-start gap-x-[16px] lg:gap-x-[32px]">
                <div className="w-[48px] h-[48px] lg:w-[77px] lg:h-[77px]">
                  <img src={e.img} alt="avatar" />
                </div>
                <div className="flex flex-col justify-start items-start gap-y-[4px] lg:gap-y-[8px]">
                  <h3 className="text-[#151517] font-medium text-[1.25rem] lg:text-[1.62rem]">
                    {e.name}
                  </h3>
                  <p className="text-[#717172] font-medium lg:text-[1.31rem]">{e.job} </p>
                </div>
              </div>
              <p className="text-[0.87rem] lg:text-[1.25rem] text-[#717172] leading-[1.43rem] lg:leading-[2.25rem]">{e.p}</p>
            </div>
          ))}
        </div>
    </section>
  );
};
