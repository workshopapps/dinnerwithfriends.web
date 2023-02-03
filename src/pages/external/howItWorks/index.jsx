import { Footer } from "../../../components";
import { HowItWorksForm } from './components'
import Navbar from "../../../components/Navbar";
import Mockup from "../../../assets/img/mockup.png";
import CreateEventsIcon from "../../../assets/icons/create-events.svg";
import DecideDatesIcon from "../../../assets/icons/decide-dates.svg";
import StayUpdatedIcon from "../../../assets/icons/stay-updated.svg";
import FakeVideo from "../../../assets/img/fake-video.png";

export const HowItWorks = () => {
  return (
    <>
      <Navbar />
      <section className="pt-20 text-[#151517]">
        <div>
          <h2 className="text-[#151517] text-center text-[1.25rem] md:text-[3rem] font-light my-[16px] md:my-24 px-[58px] md:w-[75%] m-auto">
            <span className="font-[900] md:font-medium text-[#1070ff]">
              Catch<span className="text-[#151517]">Up</span> {" "}
            </span>
            makes it easier to schedule a hang out with your acquaintances,
            friends and family
          </h2>
        </div>
        <div className="w-4/5 mx-auto md:max-w-2xl mt-[65px]">
          <img src={Mockup} alt="" />
        </div>
        <div className="bg-[#E7F0FF] px-[10%] py-16 mt-[20px] md:my-24">
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-3 justify-center gap-10">
            <div className="text-center">
              <img className="mx-auto " src={CreateEventsIcon} alt="" />
              <h3 className="text-lg my-2 font-medium">Create Events</h3>
              <p>
                Create an event, select a range of days that you will be
                available, and send invitations to the people you want to hang
                out with.
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto " src={DecideDatesIcon} alt="" />
              <h3 className="text-lg my-2 font-medium">Decide Dates</h3>
              <p>
                Invitees indicate their preferred day and time from a range
                chosen by the host. The date is decided upon by the majority of
                invitees.
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto " src={StayUpdatedIcon} alt="" />
              <h3 className="text-lg my-2 font-medium">Stay Updated</h3>
              <p>
                Access all your events at a glance on your dashboard. Add your
                events to your calendar to get notifications about the event.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[87%] mx-auto max-w-screen-xl mt-[80px]">
          <h4 className="my-12 font-medium text-[1.25rem] md:text-[3rem] text-center">
            Hang out, create memories and strengthen bonds
          </h4>
          <img src={FakeVideo} alt="" />
        </div>
        <HowItWorksForm />
      </section>
      <Footer />
    </>
  );
}
