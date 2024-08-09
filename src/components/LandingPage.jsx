import React from "react";
import "./LandingPage.css";
import chrome from "./chrome.png";
import download from "./download.png";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const LandingPage = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }

    // Triggering animations on scroll
    const elements = document.querySelectorAll(".fade-in-element");
    elements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (position < screenPosition) {
        el.classList.add("in-view");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <header className={`landing-header ${isSticky ? "sticky-nav" : ""}`}>
        <nav className="landing-nav">
          <div className="logo">
            <img src={chrome} height="50px" width="100px" alt="chrome logo" />
            <span>
              <div className="chrome">chrome</div>
            </span>
          </div>
          <ul className="nav-links">
            <li>
              <div className="home">Home</div>
            </li>
            <li>The Browser by Google</li>
            <li>
              Features <i className="arrow down"></i>
            </li>
            <li>
              Support <i className="arrow down"></i>
            </li>
          </ul>
        </nav>
        <div className="hero-content fade-in-element">
          <img
            src={chrome}
            className="hero-icon"
            height="100px"
            alt="chrome icon"
          />
          <div className="heading">
            <h1>The browser</h1>
            <h1>
              built to be <span className="highlight">safe</span>
            </h1>
          </div>

          <button className="download-button fade-in-element">
            <span>
              <img src={download} height="30px" alt="download icon" />
            </span>
            Download Chrome
          </button>
          <p className="windows-note">For Windows 11/10 64-bit.</p>
          <p className="help-text">
            <Checkbox {...label} defaultChecked />
            Help make Google Chrome better by automatically sending usage
            statistics and crash <br></br>reports to Google.{" "}
            <a href="#">Learn more</a>
          </p>
          <p className="terms">
            By downloading Chrome, you agree to the{" "}
            <a href="#">Google Terms of Service</a> and <br></br>
            <a href="#">Chrome and ChromeOS Additional Terms of Service</a>.
          </p>
        </div>
      </header>

      <div className="heading">
        <h1>The browser</h1>
        <h1>
          built to be <span className="highlight">safe</span>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
