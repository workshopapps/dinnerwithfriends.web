import React, {useEffect, useState} from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import avatar from "../../assets/img/Avatar.png";
import Footer from "../../components/Footer";
import SettingsFooter from "../../components/settingsPage/setFooter";
import { Link } from "react-router-dom";
import userServices from "../../services/userServices";

import "./profilePage.css";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";

const ProfilePage = () => {
  const [user, setUser] = useState({

		name: '',
    email: '',
    birthday:'' ,
		gender: '',
		mobile: '',
	});

  const fetchData = async() => {
    const data = await userServices.getUser()

    setUser(data)
  }
  useEffect(() => {

    fetchData();
  }, [])
  return (
    <div>
      <CreateEventNavbar />

      <div className="settings_body">
        <div className="body_title_container">
          <Link to="/dashboard/upcoming_events">
            <div className="body_title">
              <MdOutlineArrowBack />
              <h1>Account Settings</h1>
            </div>
          </Link>
          <div className="body_subTitles">
            <h5>Profile</h5>
            <Link to='/notification'>
              <span className="notification_tab">Notifications</span>
              </Link>
          </div>
        </div>

        <div className="user_details_field">
          <div className="avatar_fullName">
            <img src={avatar} alt="" className="avatar" />
            <div className="fullName">
              <h1>{user?.name}</h1>

              <span>{user?.email}</span>
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
            Fullname
            <div className="field">{user?.name}</div>
          </label>

          <label>
            Gender
            <div className="field">{user?.gender}</div>
          </label>

          <label>
            Email
            <div className="field">{user?.email}</div>
          </label>

          <label>
            Mobile
            <div className="field">{user?.mobile}</div>
          </label>

          <label>
            Birthday
            <div className="field">{user?.birthday}</div>
          </label>
        </section>
      </div>
      {/* <div className="settings-footer">
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
      </div> */}
      <SettingsFooter className="settings-footer" />
      <div id="main_footer">
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
