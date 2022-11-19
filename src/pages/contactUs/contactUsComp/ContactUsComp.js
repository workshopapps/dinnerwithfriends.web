import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ContactUsForm from "../contactUsForm/ContactUsForm";
import classes from "./ContactUs.module.css";

const ContactUsComp = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className={classes["in-touch-container"]}>
          <h3>Get in touch</h3>
          <p>
            24/7 We will answer your questions and provide solutions to your
            problems
          </p>
        </div>
        <div>
          <ContactUsForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUsComp;
