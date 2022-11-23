import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCopyright } from "react-icons/ai";
import avatar from "../../assets/img/Avatar.png";
import Dp from "../../assets/img/m-img.png";
import CatchUp from "../../assets/img/Catch Up.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import "./profilePage.css";

const profilePage = () => {
  return (
    <div>
      <Navbar />

      <div className="profile_header">
        <span className="catch__Up">
          <img src={CatchUp} alt="" />
        </span>
        <div className="Dp__area">
          <img src={Dp} alt="" className="profile__pic" />
          <IoIosArrowDown />
        </div>
      </div>

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
      <Footer />
    </div>
  );
};

export default profilePage;
