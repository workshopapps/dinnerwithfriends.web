import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Dp from "../../assets/img/m-img.png";
import CatchUp from "../../assets/img/Catch Up.png";
import "./setHeader.css"

const setHeader = () => {
  return (
    <div className="profile_header">
        <span className="catch__Up">
          <img src={CatchUp} alt="" />
        </span>
        <div className="Dp__area">
          <a href='/'><img src={Dp} alt="" className="profile__pic" /></a>
          <IoIosArrowDown />
        </div>
      </div>
  )
}

export default setHeader
