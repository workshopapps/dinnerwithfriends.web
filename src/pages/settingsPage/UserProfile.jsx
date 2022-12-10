import React, {useState, useEffect} from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import avatar from "../../assets/img/Avatar.png";
import SettingsFooter from "../../components/settingsPage/setFooter";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {Link} from "react-router-dom"
import "./profileTwo.css";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";
import userServices from "../../services/userServices";

const UserProfile = () => {
  const [user, setUser] = useState({
		fullname: ' ',
		username: '',
    email: '',
    birthday: null,
		gender: null,
		mobileNumber: null,
	});

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("https://prybar.onrender.com/api/v1/user/profile")
      const jsonResult = await result.json()
      setUser(jsonResult)
      console.log(user)
      console.log(jsonResult)
    }
    fetchData(); 
  }, [])
  
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await userServices.getUser() 
  //     setUser(result)
  //     console.log(result.json())
  //   }
  //   fetchData(); 
  // }, [])
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
            <Link to='/notification'><span className="notification_tab">Notifications</span></Link>
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
                <input  type="name" onChange={onChange} value={user.fullname} name="fullname" placeholder="Femi Femo" required />
              </div>
              <div className="input-box">
                <span className="details">Username/Nickname</span>
                <input type="name" onChange={onChange} value={user.username} name="username" placeholder="Femi Femo 😎" />
              </div>
            </div>
            
            <div className="user-details">
              <div className="input-box">
                <span className="details">Mobile Number</span>
                <input type="tel" onChange={onChange} value={user.mobileNumber} name="mobileNumber" placeholder="+234 801 234 5678" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email" onChange={onChange} value={user.email} 
                  name="email" placeholder="femiodeyinka@examplemail.com"
                  required
                />
              </div>
            </div>
            
            <div className="user-details">
              <div className="input-box">
                <span className="details">Gender</span>
                <select
                  type="select" onChange={onChange} value={user.gender} name="gender"
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
                  <input type="date" onChange={onChange} value={user.birthday} name="birthday" />
                </div>
              </div>
            </div>
        
            <div className="edit-btn">
              <input type="submit"  value="Save" className="edit_btn" />
            </div>
          </form>
        </div>

        
      </div>
      <SettingsFooter className="settings-footer" />
      <div id="main_footer">
        <Footer />
      </div>
    </div>
  );
};

export default UserProfile;
