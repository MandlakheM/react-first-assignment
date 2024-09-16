import { useState } from "react";
import "./nav.css";
import { FaBell } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import pic from "../assets/gogo.avif";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navBar gutter">
      <div className="navContainer">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className={`navHeadings ${isOpen ? "open" : ""}`}>
          <ul>
            <li><a href="">Find Work</a></li>
            <li><a href="">Learn Design</a></li>
            <li><a href="">MarketPlace</a></li>
            <li><a href="">Hire Designers</a></li>
          </ul>
        </div>

        <div className="search">
          <img src={search} alt="Search" />
        </div>

        <div className="icons">
          <a href=""><FaBell className="icon" /></a>
          <a href=""><IoMdMail className="icon" /></a>
          <a href=""><img src={pic} alt="Profile" /></a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
