import React, { useState } from "react";
import logo from "../images/logo.svg";

/**
 * Component for displaying the header/navigation bar of the web page.
 * @returns {JSX.Element} Header component.
 */
function Header() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  /**
   * Function to toggle the visibility of the mobile menu.
   */
  function showMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <header className="container py-6 flex justify-between items-center relative">
      {/* Navigation bar */}
      <nav className="flex items-center">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {/* Navigation links for larger screens */}
        <ul className="hidden md:flex">
          <li className="navli">Features</li>
          <li className="navli">Pricing</li>
          <li className="navli">Resources</li>
        </ul>
      </nav>

      {/* Login and Sign Up links for larger screens */}
      <div className="hidden md:flex">
        <ul className="flex items-center">
          <li className="text-gray hover:text-vdblue cursor-pointer font-bold">
            Login
          </li>
          <li className="ml-8 p-3 bg-cyan text-white font-bold rounded-full hover:opacity-60 cursor-pointer">
            Sign Up
          </li>
        </ul>
      </div>

      {/* Hamburger icon for mobile menu */}
      <div
        className="grid place-items-center w-8 cursor-pointer md:hidden"
        onClick={showMenu}
      >
        <div className="w-full h-1 bg-gray my-1"></div>
        <div className="w-full h-1 bg-gray my-1"></div>
        <div className="w-full h-1 bg-gray my-1"></div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute z-10 py-4 px-8 w-4/5 top-60 left-1/2 right-1/2 -translate-x-2/4 -translate-y-2/4 bg-dviolet rounded-md">
          {/* Links for mobile menu */}
          <ul className="list-none">
            <li className="text-center text-white font-bold py-4 cursor-pointer">
              Features
            </li>
            <li className="text-center text-white font-bold py-4 cursor-pointer">
              Pricing
            </li>
            <li className="text-center text-white font-bold py-4 cursor-pointer">
              Resources
            </li>
          </ul>
          <div className="bg-gray h-px my-4"></div>
          <ul className="list-none">
            <li className="text-white text-center cursor-pointer font-bold">
              Login
            </li>
            <li className="text-center py-3 mt-4 w-1/2 mx-auto bg-cyan text-white font-bold rounded-full hover:opacity-60 cursor-pointer">
              Sign Up
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
