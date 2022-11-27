import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutUs from "./components/AboutUs";

const AboutUsPage = () => {
  const [dimension, setDimension] = useState({
    width: 0,
  });

  const handleResize = () => {
    setDimension({
        width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="font-DMSans">
        <Navbar />
        <AboutUs dimension={dimension}/>
        <Footer />
    </main>

  );
}

export default AboutUsPage;