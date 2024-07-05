import React from "react";
import "./body.css";
import dollar from "../assets/dollar.png";
import arrow from "../assets/arrow.png";
import circleArrow from "../assets/circle_arrow.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import ball from "../assets/ball.png";
import guy from "../assets/guy.png";
import beard from "../assets/beard.png";
import lady from "../assets/lady.png";

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
              <img src={dollar} alt="" />
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
        <div>
          <h3>Featured Artist</h3>
        </div>
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
          <img src={circleArrow} alt="" />
        </div>
      </div>
      <div className="artistWrapper gutter">
        <div className="artist artist-1">
          <img src={guy} alt="" />

          <div className="innerArtist">
            <div>
              <h6 id="name">Zain Sajid</h6>
              <h6>Remote</h6>
              <button>Follow</button>
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
              <h6 id="name">Moty Weiss</h6>
              <h6>Narawal</h6>
              <button>Follow</button>
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
              <button>Follow</button>
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
                <img src={ball} alt="" />
              </a>
              <h6>Follow Us</h6>
            </div>
          </div>
          <div className="socialIcons">
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </div>
          <div className="arrow"></div>
        </div>
      </div>
    </>
  );
};

export default Body;
