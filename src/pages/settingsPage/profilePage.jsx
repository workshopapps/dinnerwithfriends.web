import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCopyright } from "react-icons/ai";
import avatar from "../../assets/img/Avatar.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SettingsFooter from "../../components/settingsPage/setFooter";
import { Link } from "react-router-dom";

import "./profilePage.css";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";

const profilePage = () => {
  return (
    <div>
      <div id="main_navbar">
        <Navbar />
      </div>
      <CreateEventNavbar />

      <div className="settings_body">
        <div className="body_title_container">
          <Link to="/">
            <div className="body_title">
              <MdOutlineArrowBack />
              <h1>Account Settings</h1>
            </div>
          </Link>
          <div className="body_subTitles">
            <h5>Profile</h5>
            <span className="notification_tab">Notifications</span>
          </div>
        </div>

        <div className="user_details_field">
          <div className="avatar_fullName">
            <img src={avatar} alt="" className="avatar" />
            <div className="fullName">
              <h1>Femi Odeyinka</h1>

              <span>femiodeyinka@examplemail.com</span>
            </div>
          </div>

          <Link to="/update_details">
            <div>
              <button className="edit_btn">
                <BiEdit />
                Edit
              </button>
            </div>
          </Link>
        </div>

        <section className="more_user_details">
          <label>
            Username/Nickname
            <div className="field">Femi Femo</div>
          </label>

          <label>
            Gender
            <div className="field">Male</div>
          </label>

          <label>
            Email
            <div className="field">femiodeyinka@examplemail.com</div>
          </label>

          <label>
            Mobile
            <div className="field">+234 801 234 5678</div>
          </label>

          <label>
            Birthday
            <div className="field">25 June</div>
          </label>
        </section>
      </div>
      <div className="settings-footer">
        <div className="footer_top">
          <span>
            <a href="/">Catch Up</a>
            <a href="/">About Us</a>
            <a href="/">Careers</a>
            <a href="/">How it works</a>
            <a href="/">Blog</a>
            <a href="/">Privay policy</a>
          </span>
          <span>
            <a href="/">Terms & Conditions</a>
            <a href="/">Security</a>
            <a href="/">FAQs</a>
            <a href="/">Help Center</a>
          </span>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_text">
            <p>English</p>
            <IoIosArrowDown />
          </div>
          <div className="footer_bottom_text">
            <AiOutlineCopyright />
            <p>2022 Team PryBar</p>
          </div>
        </div>
      </div>
      <SettingsFooter className="settings-footer" />
      <div id="main_footer">
        <Footer />
      </div>
    </div>
  );
};

export default profilePage;
