import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HelpCenter from ".";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import BottomBar from "./components/bottomBar";
import Category from "./components/category";
import { data } from "./helpData";
import SingleHelp from "./singleHelp";

const HelpRoutes = () => {
    const [activeLink, setActiveLink] = useState("get_started")

    return (
        <div className="">
            <Navbar />
            <Routes>
                <Route path="" exact element={<HelpCenter data={data} activeLink={activeLink}/>} />
                <Route path="/category" exact element={<Category data={data} activeLink={activeLink} setActiveLink={setActiveLink} activeCategory={data.filter(category => category.link === activeLink )} />} />
                <Route path="/single_help" exact element={<SingleHelp data={data} activeLink={activeLink} setActiveLink={setActiveLink} />} />
            </Routes>

            <div className="bg-blue-700 m-0 mt-24">
                <BottomBar />
            </div>

            <Footer />
        </div>
    )
}

export default HelpRoutes;