import phoneGroupMobile from "../../assets/img/howItWorks/phone-group-mobile.png";
import phoneGroupDesktop from "../../assets/img/howItWorks/phone-group-desktop.png";
import icon1 from "../../assets/img/howItWorks/icon-1.svg";
import icon2 from "../../assets/img/howItWorks/icon-2.svg";
import icon3 from "../../assets/img/howItWorks/icon-3.svg";
import icon4 from "../../assets/img/howItWorks/icon-4.svg";

export default function FirstComponent() {
  return (
    <div className="mt-[7.5rem] lg:mt-40 text-base w-full flex flex-col items-center">
      <h1 className="text-center text-2xl px-14 md:text-4xl lg:text-6xl lg:w-[825px]">
        <span className="font-bold text-[#1070FF]">Catch</span>{" "}
        <span className="font-bold">up</span> makes it easier to connect with
        your friends and family
      </h1>
      <img
        className="md:hidden mt-[3.75rem]"
        src={phoneGroupMobile}
        alt="phone display"
      />
      <img
        className="hidden md:flex mt-12 lg:mt-28 md:w-[1127px] mx-auto"
        src={phoneGroupDesktop}
        alt="phone display"
      />
      <div className="text-center w-full mt-[3.375rem] md:mt-28">
        <h3 className="font-bold mx-6 md:text-3xl lg:text-5xl">
          Plan and organise every get-together, from dinner to a reunion.
        </h3>
        <section className="mt-10 py-[4.875rem] px-8 bg-[#e7f0ffcc] w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white flex flex-col justify-center items-center gap-6 w-[20.375rem] mx-auto py-5 px-[1.125rem] shadow-md">
            <img className="w-[72px]" src={icon1} alt="Icon 1" />
            <h4 className="text-[#1070FF] font-bold">Get RSVPs</h4>
            <p>
              Easily send invites with details of your get-together and your
              list can automatically respond to let you know that they are
              coming.
            </p>
            <p>
              This gives you a better handle on planning for the right number of
              people.
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center gap-6 w-[20.375rem] mx-auto py-5 px-[1.125rem] shadow-md">
            <img className="w-[72px]" src={icon2} alt="icon 2" />
            <h4 className="text-[#1070FF] font-bold">Interactive Features </h4>
            <p>
              Access features that allow every participant that has been invited
              or accepted an invitation to have their say in what you’re doing.
            </p>
            <p>
              Use “vote” to get others' opinions on happenings in your
              get-together or utilize the chat feature to share updates to
              everyone .
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center gap-6 w-[20.375rem] mx-auto py-5 px-[1.125rem] shadow-md">
            <img className="w-[72px]" src={icon3} alt="icon 3" />
            <h4 className="text-[#1070FF] font-bold">Keep Track of Events </h4>
            <p>
              Catch Up App will flawlessly add all occasions into your calendar,
              that you’ve planned or accepted an invite for, to help you manage
              it all from one place.
            </p>
            <p>
              You can instantly get access to all invites whatever you need to
              share.
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center gap-6 w-[20.375rem] mx-auto py-5 px-[1.125rem] shadow-md">
            <img className="w-[72px]" src={icon4} alt="icon 4" />
            <h4 className="text-[#1070FF] font-bold">Live Location </h4>
            <p>
              The address of where you’re getting together is always visible to
              the whole invite list so you never have to share it in other chats
              or texts.
            </p>
            <p>The location is automatically updated if you change venues.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
