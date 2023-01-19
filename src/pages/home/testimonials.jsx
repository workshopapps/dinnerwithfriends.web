import React from "react";

import image1 from "../../assets/img/test1.png";
import image2 from "../../assets/img/test2.png";
import image3 from "../../assets/img/test3.png";
import image4 from "../../assets/img/test4.png";

const Testimonials = () => {
  const testimonies = [
    {
      img: image1,
      name: "Martha James",
      job: "Operation Officer, Unilever",
      p: "'I found time I didn't know I had all thanks to CatchUp!' It takes a lot of time to manage an organization, attend meetings, and organize events. I barely have time to relax and unwind with friends. Now I can find time to work, rest and catch up with friends.",
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
    {
      img: image4,
      name: "Chisom Eze",
      job: "Operation Officer, Nestle",
      p: "'I finally had time to go on a date all thanks to CatchUp!' 'I had tried going on several dates, but somehow the schedules and timing did not always match mine. Thanks to CatchUp, I was able to plan and prepare for my date without having anything come up impromptu.'",
      date: "3 days ago",
    },
  ];
  return (
    <section className="relative pt-24 pb-32 lg:mx-28 bg-white overflow-hidden">
      <div className="relative z-10 container px-4 mx-auto">
        <h2 className="text-[#0056D6] mb-8 text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-center text-[#1070FF] tracking-px-n leading-10">
        Rekindling Bonds and Fostering <br />
        Friendships.
        </h2>
        <p className="mb-14 text-lg font-normal text-center lg:text-3xl ">
        Don't just take our word for it; read what others have to say about us.
        </p>
        <div className="flex flex-wrap -m-3">
          {testimonies.map((e, i) => (
            <div className="w-full md:w-1/2 lg:w-1/2 py-3 md:p-3" key={i}>
              <div className="px-6 pt-6 h-full bg-white bg-opacity-60 border border-[#B1B1B1] rounded-md">
                <div className="flex flex-col justify-between h-full">
                  <div className="mb-5 block">
                    <div className="flex iitems-center mb-4 -m-2">
                      <div className="w-[77px] p-2">
                        <img src={e.img} alt="" />
                      </div>
                      <div className="w-auto p-2">
                        <h3 className="font-semibold leading-normal">
                          {e.name}{" "}
                        </h3>
                        <p className="text-gray-700 mt-[4px]">{e.job} </p>
                      </div>
                    </div>
                    <p className="text-md text-gray-600">{e.p}</p>
                  </div>
                  {/*<div className="block">
                    <p className="text-sm text-gray-500 font-medium">
                      {e.date}{" "}
                    </p>
                  </div>*/}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
