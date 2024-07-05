import React from "react";
import "./nav.css";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import bell from "../assets/bell.png";
import mail from "../assets/mail.png";
import pic from "../assets/gogo.avif"

const Nav = () => {
  return (
    <nav className="navBar gutter">
      <div className="navContainer">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="navHeadings">
          <ul>
            <a href=""><li>Find Work</li></a>
            <a href=""><li>Learn Design</li></a>
            <a href=""><li>MarketPlace</li></a>
            <a href=""><li>Hire Designers</li></a>
          </ul>
        </div>

        <div className="search">
         {/* <input type="text" name="" id=""  /> */}
          <img src={search} />
        </div>

        <div className="icons">
          <a href=""><img src={bell} alt="" /></a>
          <a href=""><img src={mail} alt="" /></a>
          <a href=""><img src={pic} alt="" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
