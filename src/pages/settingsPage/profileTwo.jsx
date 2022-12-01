import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import avatar from "../../assets/img/Avatar.png";
import SettingsFooter from "../../components/settingsPage/setFooter";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {Link} from "react-router-dom"
import "./profileTwo.css";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";

const profileTwo = () => {
  return (
    <div>
      <div id="main_navbar">
        <Navbar />
      </div>
      <CreateEventNavbar />

      <div id="main-body">
        <div className="body_title_wrapper">
        <Link to="/settings">  <div className="body_title">
            <MdOutlineArrowBack />
           <h1>Account Settings</h1>
          </div></Link>
          <div className="body_subtitles">
            <h5>Profile</h5>
            <span className="notification_tab">Notifications</span>
          </div>
        </div>

        <div className="user_details_field">
          <div className="avatar_fullName">
            <img src={avatar} alt="" className="avatar" />
            <div className="fullName">
              <h1>Change Profile photo</h1>
              <p>Recommended Square JPG,</p>
              <p>PNG, at least 1000 x 1000 photo</p>
            </div>
          </div>
        </div>

        <div className="the-container">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="name" placeholder="Femi Femo" required />
              </div>
              <div className="input-box">
                <span className="details">Username/Nickname</span>
                <input type="name" placeholder="Femi Femo 😎" />
              </div>
            </div>
            
            <div className="user-details">
              <div className="input-box">
                <span className="details">Mobile Number</span>
                <input type="tel" placeholder="+234 801 234 5678" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  placeholder="femiodeyinka@examplemail.com"
                  required
                />
              </div>
            </div>
            
            <div className="user-details">
              <div className="input-box">
                <span className="details">Gender</span>
                <select
                  type="select"
                  placeholder="Femi Femo"
                  className="select"
                >
                  <option required>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="input-box">
                <span className="details">Birthday</span>
                <div className="date_input">
                  <input type="date" />
                </div>
              </div>
            </div>
        
            <div className="edit-btn">
              <input type="submit" value="Save" className="edit_btn" />
            </div>
          </form>
        </div>

        {/*<div className="main_input_wrapper">
           <div className="two_input_wrapped">
            <div className="input_box_wrapper">
              <p>Full Name</p>
              <div className="input">
                <input type="name" placeholder="Femi Femo" />
              </div>
            </div>

            <div className="input_box_wrapper">
              <p>Username/Nickname</p>
              <div className="input">
                <input type="name" placeholder="Femi Femo 😎" />
              </div>
            </div>
          </div>

          <div className="two_input_wrapped">
            <div className="input_box_wrapper">
              <p>Mobile Number</p>
              <div className="input">
                <input type="tel" placeholder="+234 801 234 5678" />
              </div>
            </div>

            <div className="input_box_wrapper">
              <p>Email</p>
              <div className="input">
                <input
                  type="email"
                  placeholder="femiodeyinka@examplemail.com"
                />
              </div>
            </div>
          </div>

          <div className="two_input_wrapped">
            <div className="input_box_wrapper">
              <p>Gender</p>
              <div className="input">
                <select type="gender" placeholder="Male" className="select_box">
                  <option required>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="input_box_wrapper">
              <p>Birthday</p>
              <div className="input">
                <input type="date" placeholder="" className="date_box" />
              </div>
            </div>
          </div>
          <div>
            <button className="edit_btn">Save</button>
          </div>
        </div>*/}
      </div>
      <SettingsFooter className="settings-footer" />
      <div id="main_footer">
        <Footer />
      </div>
    </div>
  );
};

export default profileTwo;
