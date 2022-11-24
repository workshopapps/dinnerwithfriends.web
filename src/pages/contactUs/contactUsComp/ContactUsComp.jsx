import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ContactUsDetails from "../contactDetails/ContactUsDetails";
import ContactUsForm from "../contactUsForm/ContactUsForm";
import classes from "./ContactUsComp.module.css";
import { useEffect } from "react";

const ContactUsComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full mx-auto">
      <Navbar />
      <div className="w-full h-64 text-white mt-16 ">
        <h3>Get in touch</h3>
        <p>
          24/7 We will answer your questions and provide solutions to your
          problems
        </p>
      </div>
      <div className={classes["form-container"]}>
        <ContactUsForm />
        <ContactUsDetails />
      </div>
      <Footer />
    </section>
  );
};

export default ContactUsComp;
