import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import priter from "../images/icon-pinterest.svg";
import insta from "../images/icon-instagram.svg";

/**
 * Component for displaying the footer section of the web page.
 * @returns {JSX.Element} Footer component.
 */
function Footer() {
  // The Footer component displays the footer section of the web page

  return (
    <footer className="bg-vdviolet py-12 text-center md:text-left">
      {/* Container to hold the footer content with grid layout */}
      <div className="container grid grid-cols-5 justify-between">
        {/* Company name with white color, large font size, and bold */}
        <h4 className="col-span-5 md:col-span-1 text-4xl text-white font-bold">
          Shortly
        </h4>

        {/* List of features with white color */}
        <ul className="col-span-5 md:col-span-1 text-gray">
          <li className="py-2">
            <a className="font-bold text-white" href="#">
              Features
            </a>
          </li>
          <li className="py-2">
            <a className="font-bold" href="#">
              Link Shortening
            </a>
          </li>
          <li className="py-2">
            <a className="font-bold" href="#">
              Branded Links
            </a>
          </li>
          <li className="py-2">
            <a className="font-bold" href="#">
              Analytics
            </a>
          </li>
        </ul>

        {/* List of resources with white color */}
        <ul className="col-span-5 md:col-span-1 text-gray">
          <li className="py-2">
            <a className="font-bold text-white" href="#">
              Resources
            </a>
          </li>
          <li className="py-2">
            <a className="font-bold" href="#">
              Blog
            </a>
          </li>
          <li className="py-2">
            <a className="font-bold" href="#">
              Developer
            </a>
          </li>
          <li className="py-2">
            <a className="font-bold" href="#">
              Support
            </a>
          </li>
        </ul>

        {/* List of company-related links with white color */}
        <ul className="col-span-5 md:col-span-1 text-gray">
          <li className="py-2">
            <a className="font-bold text-white" href="#">
              Company
            </a>
          </li>
          <li className="py-2">
            <a className="font-bold" href="#">
              About
            </a>
          </li>
          <li className="py-2">
            <a className="font-bold" href="#">
              Our Teams
            </a>
          </li>
          <li className="py-2">
            <a className="font-bold" href="#">
              Careers
            </a>
          </li>
          <li className="py-2">
            <a className="font-bold" href="#">
              Contact
            </a>
          </li>
        </ul>

        {/* Social media icons with links */}
        <ul className="flex justify-center items-center mt-4 py-2 gap-6 col-span-5 md:col-span-1 text-gray">
          <li>
            <a href="#">
              <img src={facebook} alt="social" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="social" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={priter} alt="social" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={insta} alt="social" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
