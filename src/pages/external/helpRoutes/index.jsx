import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {Footer} from "../../../components";
import Navbar from "../../../components/Navbar";
import { BottomBar, Category, Help } from "./components";
import { data } from "./helpData";

export const HelpRoutes = () => {
  const [activeLink, setActiveLink] = useState("get_started");

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route
          path=""
          exact
          element={<Help data={data} activeLink={activeLink} />}
        />
        <Route
          path="/category"
          exact
          element={
            <Category
              data={data}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              activeCategory={data.filter(
                (category) => category.link === activeLink
              )}
            />
          }
        />
      </Routes>

      <div className="bg-[#0056D6] m-0 mt-24">
        <BottomBar />
      </div>

      <Footer />
    </div>
  );
};
