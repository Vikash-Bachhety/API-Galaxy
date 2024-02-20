import React from "react";
import Links from "./Links";
import insta from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import twitter from "../assets/icons/twitter.png";
import gmail from "../assets/icons/gmail.png";
import whatsapp from "../assets/icons/whatsapp.png";
import youtube from "../assets/icons/youtube.png";

function Footer() {
  return (
    <div className="backGroundAnimate flex flex-col flex-wrap fixed bottom-0 left-0 min-w-full h-auto p-4 sm:p-0 lg:h-32 items-center pt-1 lg:pt-7 tracking-wider">
      <div className="flex flex-wrap text-white sm:mx-0 mx-4 gap-x-8 lg:gap-x-10 text-sm lg:text-xl mr-5 sm:mr-0 justify-center">
        <Links to="Home" text="Home" />
        <Links to="Weather" text="Weather" />
        <Links to="Dictionary" text="Dictionary" />
        <Links to="Converter" text="Converter" />
        <Links to="Recipe" text="Recipe" />
        <Links to = "Location" text='Location'/>
        <Links to="Password" text="Password Generator" />
        <Links to="Contact" text="Contact Us" />
      </div>
      <div className="scrollLeft flex gap-6 justify-center mr-5 sm:mr-0">
        <a href="https://www.linkedin.com/" target="_blank">
          <img
            className="h-6 w-6 lg:w-10 lg:h-10 p-0.5 mt-3 lg:mt-5 hover:border-2 rounded-full hover:border-white"
            src={linkedin}
            alt=""
          />
        </a>
        <a href="https://instagram.com/" target="_blank">
          <img
            className="h-6 w-6 lg:w-8 lg:h-8 p-0.4 mt-3 lg:mt-5 hover:border-2 rounded-full hover:border-white"
            src={insta}
            alt=""
          />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img
            className="h-6 w-6 lg:w-8 lg:h-8 p-0.4 mt-3 lg:mt-5 hover:border-2 rounded-full hover:border-white"
            src={twitter}
            alt=""
          />
        </a>
        <a href="mailto:your_email@example.com" target="_blank">
          <img
            className="h-6 w-6 lg:w-8 lg:h-8 p-0.4 mt-3 lg:mt-5 hover:border-2 rounded-full hover:border-white"
            src={gmail}
            alt=""
          />
        </a>
        <a href="https://wa.me/" target="_blank">
          <img
            className="h-6 w-6 lg:w-8 lg:h-8 p-0.4 mt-3 lg:mt-5 hover:border-2 rounded-full hover:border-white"
            src={whatsapp}
            alt=""
          />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img
            className="h-6 w-6 lg:w-8 lg:h-8 p-0.4 mt-3 lg:mt-5 hover:border-2 rounded-full hover:border-white"
            src={youtube}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
