import React from "react";
import "./body.css";
import { BsCurrencyDollar } from "react-icons/bs";
import arrow from "../assets/arrow.png";
import { IoIosArrowDropright } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { RiBasketballLine } from "react-icons/ri";
import guy from "../assets/guy.png";
import beard from "../assets/beard.png";
import lady from "../assets/lady.png";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Body = () => {
  return (
    <>
      <div className="bodyContainer gutter">
        <div>
          <h1 id="large">Freelance </h1>
          <h1 id="large">Designer Service</h1>
          <h3 id="small">Remote / Full-time</h3>
        </div>
        <div className="priceWrapper">
          <div className="background"></div>
          <div className="price">
            <h1>99</h1>
            <div id="dollar">
            <BsCurrencyDollar />
            </div>
            <h5>
              $99/yearly. The standard VAT rate may be charged, following the
              law of your country <br />
              <br />
              <h3>
                <a href="">Subscribe</a>
              </h3>
            </h5>
          </div>
        </div>
      </div>

      <div className="featuredArtistContainer gutter">
          <h3 id="featuredText">Featured Artist</h3>
        <img src={arrow} alt="" />

        <div className="rainbowItems rainbow-1">
          <h6>uiux</h6>
        </div>
        <div className="rainbowItems rainbow-2">
          <h6>illust</h6>
        </div>
        <div className="rainbowItems rainbow-3">
          <h6>motion</h6>
        </div>
        <div className="rainbowItems rainbow-4">
          <a href="">
            <IoIosArrowDropright className="icon" />
          </a>
        </div>
      </div>
      <div className="artistWrapper gutter">
        <div className="artist artist-1">
          <img src={guy} alt="" />

          <div className="innerArtist">
            <div>
              <h6>Zain Sajid</h6>
              <h6 id="name">Remote</h6>
              <button>
                Follow <FaPlus />
              </button>
            </div>
            <div id="status">
              <div id="whiteDot">
                <div id="greenDot"></div>
              </div>
            </div>
          </div>
          <div className="parallelograph"></div>
        </div>
        <div className="artist artist-2">
          <img src={beard} alt="" />

          <div className="innerArtist">
            <div>
              <h6>Moty Weiss</h6>
              <h6 id="name">Narawal</h6>
              <button>
                Follow <FaPlus />
              </button>
            </div>
            <div>
              <div id="status">
                <div id="whiteDot">
                  <div id="greenDot"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallelograph" id="parallelographPurple"></div>
        </div>
        <div className="artist artist-3">
          <img src={lady} alt="" />

          <div className="innerArtist">
            <div>
              <h6>Alena Aulova</h6>
              <h6 id="name">Ukraine</h6>
              <button>
                Follow <FaPlus />
              </button>
            </div>
            <div>
              <div id="status">
                <div id="whiteDot">
                  <div id="greenDot"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallelograph" id="parallelographRed"></div>
        </div>
        <div className="follow">
          <div>
            <div className="followUs">
              <a href="">
                <RiBasketballLine className="icon" />{" "}
              </a>
              <h6>Follow Us</h6>
              <div id="longerRed"></div>

            </div>
          </div>
          <div className="socialIcons">
            <a href="">
              <FaFacebookF className="icon" />{" "}
            </a>
            <a href="">
              <BsInstagram className="icon" />{" "}
            </a>
            <a href="">
              <FiTwitter className="icon" />{" "}
            </a>
            <a href="">
              <FaLinkedinIn className="icon" />{" "}
            </a>
            <div className="red"></div>
          </div>
          <div className="arrow">
            <a href="">
              <FaArrowRight className="icon" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
