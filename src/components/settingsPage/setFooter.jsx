import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineCopyright } from "react-icons/ai";
import "./setFooter.css"


const setFooter = () => {
  return (
    <div>
      <div className="settings-footer">
        <div className="footer_top">
          <span>
            <a href="/">Catch Up</a>
            <a href="/contact-us">About Us</a>
            <a href="/event_summary">Careers</a>
            <a href="/howItWorks">How it works</a>
            <a href="/error404">Blog</a>
            <a href="/policy">Privay policy</a>
          </span>
          <span>
            <a href="/terms">Terms & Conditions</a>
            <a href="/error404">Security</a>
            <a href="/faq">FAQs</a>
            <a href="/error404">Help Center</a>
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
     
    </div>
  )
}

export default setFooter
