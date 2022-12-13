import phoneGroupMobile from "../../assets/img/howItWorks/phone-group-mobile.png";
import phoneGroupDesktop from "../../assets/img/howItWorks/phone-group-desktop.png";
import image from "../../assets/img/howItWorks/image.png";
import icon1 from "../../assets/img/howItWorks/icon-1.svg";
import icon2 from "../../assets/img/howItWorks/icon-2.svg";
import icon3 from "../../assets/img/howItWorks/icon-3.svg";
import icon4 from "../../assets/img/howItWorks/icon-4.svg";
import { Link } from "react-router-dom";

export default function FirstComponent() {
  return (
    <div className="mt-[7.5rem] lg:mt-40 text-base flex flex-col items-center w-[85%] mx-auto">
      <h1 className="text-center text-2xl px-14 md:text-4xl lg:text-6xl lg:w-[825px]">
        <span className="font-bold text-[#0056D6]">Catch</span>{" "}
        <span className="font-bold">up</span> makes it easier to connect with
        your friends and family
      </h1>
      <img
        className="md:hidden mt-[3.75rem]"
        src={phoneGroupMobile}
        alt="phone display"
      />
      <img
        className="hidden md:flex mt-12 md:w-[700px] lg:mt-28 lg:w-[1127px] mx-auto"
        src={phoneGroupDesktop}
        alt="phone display"
      />
      <div className="text-center w-full mt-[3.375rem] md:mt-28">
        <h3 className="font-bold mx-6 md:text-3xl lg:px-32 lg:text-5xl">
          Plan and organise every get-together, from dinner to a reunion.
        </h3>
        <section className="mt-10 py-[4.875rem] px-8 bg-[#e7f0ffcc] w-full grid gap-4 md:gap-12 lg:px-32 md:grid-cols-2 xl:grid-cols-4">
          <div className="bg-white flex flex-col justify-center items-center gap-6  mx-auto py-5 px-[1.125rem] shadow-md">
            <img className="w-[72px] h-[72px]" src={icon1} alt="Icon 1" />
            <h4 className="text-[#0056D6] font-bold">Get RSVPs</h4>
            <p className="font-medium">
              Easily send invites with details of your get-together and your
              list can automatically respond to let you know that they are
              coming.
            </p>
            <p className="font-medium">
              This gives you a better handle on planning for the right number of
              people.
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center gap-6  mx-auto py-5 px-[1.125rem] shadow-md">
            <img className="w-[72px] h-[72px]" src={icon2} alt="icon 2" />
            <h4 className="text-[#0056D6] font-bold">Interactive Features </h4>
            <p className="font-medium">
              Access features that allow every participant that has been invited
              or accepted an invitation to have their say in what you’re doing.
            </p>
            <p className="font-medium">
              Use “vote” to get others' opinions on happenings in your
              get-together or utilize the chat feature to share updates to
              everyone .
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center gap-6  mx-auto py-5 px-[1.125rem] shadow-md">
            <img className="w-[72px] h-[72px]" src={icon3} alt="icon 3" />
            <h4 className="text-[#0056D6] font-bold">Keep Track of Events </h4>
            <p className="font-medium">
              Catch Up App will flawlessly add all occasions into your calendar,
              that you’ve planned or accepted an invite for, to help you manage
              it all from one place.
            </p>
            <p className="font-medium">
              You can instantly get access to all invites whatever you need to
              share.
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center gap-6  mx-auto py-5 px-[1.125rem] shadow-md">
            <img className="w-[72px] h-[72px]" src={icon4} alt="icon 4" />
            <h4 className="text-[#0056D6] font-bold">Live Location </h4>
            <p className="font-medium">
              The address of where you’re getting together is always visible to
              the whole invite list so you never have to share it in other chats
              or texts.
            </p>
            <p className="font-medium">
              The location is automatically updated if you change venues.
            </p>
          </div>
        </section>
      </div>

      <div className=" flex flex-col xl:flex-row-reverse pt-8 pb-24 gap-8 px-8 w-full mx-auto">
        <div className="mt-[20px] xl:w-[45%] md:w-full order-2 lg:order-1">
          <img className="w-full" src={image} alt="invite contacts preview" />
        </div>

        <div className="xl:w-[55%] flex flex-col gap-6 items-start justify-center ">
          <h2 className="text-[#0056D6] text-2xl tracking-wide font-bold md:text-5xl lg:text-[3.25rem]">
            Instantly invite anyone on your contact list
          </h2>
          <p className="text-sm md:text-xl lg:text-2xl ">
            When you create a get-together you can add as many people as you
            would like, as long as they are in your contact list. Whether you’re
            getting together with two friends or holding a large family reunion,
            you will no longer need large and multiple group chats that change
            every time someone new gets added. Inviting someone later is just as
            easy as when you create the gathering, and the process makes sure
            they didn’t miss anything no matter when they were added.
          </p>
          <Link to="/sign_up">
            <button className="w-fit px-8 py-3 border-0 outline-none text-white rounded bg-[#0056D6]">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
