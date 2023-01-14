import Footer from "../../components/footer/index";
import Navbar from "../../components/Navbar";
import Mockup from "../../assets/img/mockup.png";
import CreateEventsIcon from "../../assets/icons/create-events.svg";
import DecideDatesIcon from "../../assets/icons/decide-dates.svg";
import StayUpdatedIcon from "../../assets/icons/stay-updated.svg";
import FakeVideo from "../../assets/img/fake-video.png";

export default function HowItWorks() {
  return (
    <div className="font-[Satoshi]">
      <Navbar />
      <main className="pt-20 text-[#151517]">
        <section>
          <h1 className="text-[#151517] text-center text-4xl font-light w-2/3 mx-auto my-16 md:my-24 max-w-2xl">
            <span className="font-black text-[#1070ff]">
              Catch<span className="text-[#151517]">Up</span>
            </span>{" "}
            makes it easier to schedule a hang out with your acquaintances,
            friends and family
          </h1>
        </section>
        <section className="w-4/5 mx-auto md:max-w-2xl ">
          <img src={Mockup} alt="" />
        </section>
        <section className="bg-[#E7F0FF] px-[10%] py-16 my-24 ">
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-3 justify-center gap-10">
            <div className="text-center">
              <img className="mx-auto " src={CreateEventsIcon} alt="" />
              <h4 className="text-lg my-2 font-medium">Create Events</h4>
              <p>
                Create an event, select a range of days that you will be
                available, and send invitations to the people you want to hang
                out with.
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto " src={DecideDatesIcon} alt="" />
              <h4 className="text-lg my-2 font-medium">Decide Dates</h4>
              <p>
                Invitees indicate their preferred day and time from a range
                chosen by the host. The date is decided upon by the majority of
                invitees.
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto " src={StayUpdatedIcon} alt="" />
              <h4 className="text-lg my-2 font-medium">Stay Updated</h4>
              <p>
                Access all your events at a glance on your dashboard. Add your
                events to your calendar to get notifications about the event.
              </p>
            </div>
          </div>
        </section>
        <section className="w-[87%] mx-auto max-w-screen-xl">
          <h1 className="my-12 font-medium text-4xl text-center">
            Hang out, create memories and strengthen bonds
          </h1>
          <img src={FakeVideo} alt="" />
        </section>
        <section className="w-[87%] my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 max-w-screen-xl mx-auto">
          <div className="md:col-span-3">
            <h1 className="text-[#1070ff] text-4xl md:text-5xl">Still have questions?</h1>
            <p className="my-4 w-4/5">
              Send us any questions you may have about CatchUp and we will get
              back to you as soon as possible.
            </p>
          </div>
          <form action="" className="md:col-span-2 w-full grid grid-cols-2 gap-x-5 gap-y-4">
            <input className="px-3 py-2 focus:outline-gray-800 border border-gray-300 rounded-md w-full" type="text" placeholder="Firstname" />
            <input className="px-3 py-2 focus:outline-gray-800 border border-gray-300 rounded-md w-full" type="text" placeholder="Lastname" />
            <input className="px-3 py-2 focus:outline-gray-800 col-span-2 border border-gray-300 rounded-md w-full" type="email" placeholder="Email" />
            <textarea className="px-3 py-2 focus:outline-gray-800 col-span-2 border border-gray-300 rounded-md w-full" name="" id="" cols="30" rows="10" placeholder="Enter a description..."></textarea>
            <button className="col-span-2 bg-[#1070ff] text-white px-4 py-2 rounded-md">Send</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
