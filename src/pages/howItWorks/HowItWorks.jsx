import {Footer} from "../../components";
import Navbar from "../../components/Navbar";
import FirstComponent from "./FirstComponent";
import Howitwork2 from "./Howitwork2";

export default function HowItWorks() {
  return (
    <div>
      <Navbar />
      <section>
        <FirstComponent />
        <Howitwork2 />
      </section>
      <Footer />
    </div>
  );
}
