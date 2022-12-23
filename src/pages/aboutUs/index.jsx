import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import blueArrow from "./assets/bluearrow.svg";
import arrowRight from "./assets/ArrowRightOutline.svg";

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
    <div className="font-DMSans">
        <Navbar />
        <main dimension={dimension}>
          <section>
            <h1 className="text-[#1070FF]">Our goal is to bring people together</h1>
            <p>Our core values drive our decisions and help us align with our goal</p>
          </section>
          <section>
            <img src="" alt="" />
            <div>
              <h3>Teamwork</h3>
              <p>Together we make things great and we make great things</p>
            </div>
          </section>
          <section>
            <img src="" alt="" />
            <div>
              <h3>Diversity</h3>
              <p>We cherish inclusivity and diverse ideas</p>
            </div>
          </section>
          <section>
            <img src="" alt="" />
            <div>
              <h3>Passion</h3>
              <p>We thrive on passion, energy and positive vibes</p>
            </div>
          </section>
          <section>
            <img src="" alt="" />
            <div>
              <h3>Excellence</h3>
              <p>We go the extra mile for our customers, our product and our team.</p>
            </div>
          </section>
          <section>
            <h1>Meet Our Team</h1>
            <p>We're in the business of getting people to connect. This is why our team reflects core values and sets us up for success.</p>
          </section>
          <section>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Lois J.</h3>
                <p>Product Manager</p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Donice U.</h3>
                <p>Frontend Lead</p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Ekene N.</h3>
                <p>Backend Lead</p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Joshua O.</h3>
                <p>Marketing Lead</p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Ugomma E.</h3>
                <p>Product Design Lead</p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Uneku E.</h3>
                <p>DevOps Lead</p>
              </div>
            </div>
          </section>
          {/* schedule an event with catchup */}
          <section>
            <h1>Schedule an event with CatchUp</h1>
            <button className=""></button>
          </section>
        </main>
        <Footer />
    </div>

  );
}

export default AboutUsPage;