import React from "react";

import image1 from "../../assets/img/1.png"
import image2 from "../../assets/img/2.png"
import image3 from "../../assets/img/3.png"

const Testimonials = () => {
  const testimonies = [
    {
      "img": image1,
      "name": "Adeyinka Adekola",
      "job": "Account manager, UBA Bank",
      "p":"I have always found it hard to balance both work and my personal life, coming across catch up it helped me schedule events where i can meet up weekly with my friends and have fun.",
      "date": "3 days ago",
    },
    {
      "img": image2,
      "name": "Chisom Eze",
      "job": "Operation Officer, Nestle",
      "p":"Catch up as really kept me on schedule, on how i meet up and with my friends, i am grateful something like this can be built and solves real life problem",
      "date": "3 days ago",
    },
    {
      "img": image3,
      "name": "Karim Hassan",
      "job": "General Manager , Innosson Motors",
      "p":"Finding time to see my friends has really been hard until i started using catch up which has ahd a positive impact in my life",
      "date": "3 days ago",
    },
  ]
  return (
    <section class="relative pt-24 pb-32 bg-white overflow-hidden">
      <img
        class="absolute top-0 left-0"
        src="flaro-assets/images/testimonials/gradient.svg"
        alt=""
      />
      <img
        class="absolute bottom-0 right-0"
        src="flaro-assets/images/testimonials/gradient2.svg"
        alt=""
      />
      <div class="relative z-10 container px-4 mx-auto">
        <h2 class="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-center text-gray-900 tracking-px-n leading-10">
          Building bonds and <br />
          core values for the user.
        </h2>
        <p className="mb-8 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Dont Just hear it from us, this is how we have helped support healthy
          friendships
        </p>
        <div class="flex flex-wrap -m-3">
          {testimonies.map((e) => (
            <div class="w-full md:w-1/2 lg:w-1/3 p-3">
            <div class="p-6 h-full bg-white bg-opacity-60 border rounded-5xl">
              <div class="flex flex-col justify-between h-full">
                <div class="mb-5 block">
                  <div class="flex flex-wrap mb-4 -m-2">
                    <div class="w-auto p-2">
                      <img
                        src={e.img}
                        alt=""
                      />
                    </div>
                    <div class="w-auto p-2">
                      <h3 class="font-semibold leading-normal">{e.name} </h3>
                      <p class="text-gray-500 ">{e.job} </p>
                    </div>
                  </div>
                  <p class="text-md text-gray-900">
                    {e.p}
                  </p>
                </div>
                <div class="block">
                  <p class="text-sm text-gray-500 font-medium">{e.date} </p>
                </div>
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
