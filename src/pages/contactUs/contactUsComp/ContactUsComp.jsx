import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ContactUsDetails from "../contactDetails/ContactUsDetails";
import ContactUsForm from "../contactUsForm/ContactUsForm";
// import classes from "./ContactUsComp.module.css";
import { useEffect } from "react";

const ContactUsComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" w-full  mx-auto">
      <Navbar />
      <div className="w-full h-64 text-white mt-16 bg-contact-us bg-no-repeat bg-cover flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-bold">
        <h3 className="text-5xl">Get in touch</h3>
        <p className="text-base mt-6">
          24/7 We will answer your questions and provide solutions to your
          problems
        </p>
      </div>
      <div className="w-full flex px-6 flex-col md:flex-row   py-16 sm:px-8 lg:px-12 xl:px-24 2xl:px-44">
        <ContactUsForm />
        <ContactUsDetails />
      </div>
      <Footer />
    </section>
  );
};

export default ContactUsComp;
