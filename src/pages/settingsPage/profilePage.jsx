import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import avatar from "../../assets/img/Avatar.png";
import SettingsHeader from "../../components/settingsPage/setHeader";
import SettingsFooter from "../../components/settingsPage/setFooter";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import "./profilePage.css";

const profilePage = () => {
  return (
    <div>
      <div id="main_navbar">
        <Navbar />
      </div>
      <SettingsHeader className="SettingsHeader" />

      <div className="settings_body">
        <div className="body_title_container">
          <div className="body_title">
            <MdOutlineArrowBack />
            <h1>Account Settings</h1>
          </div>
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

          <div>
            <button className="edit_btn">
              <BiEdit />
              Edit
            </button>
          </div>
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
      <SettingsFooter className="settings-footer" />
      <div id="main_footer">
        <Footer />
      </div>
    </div>
  );
};

export default profilePage;
