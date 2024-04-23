import React from "react";
import hero from "../images/illustration-working.svg";

/**
 * Component for displaying the hero section of the web page.
 * @returns {JSX.Element} Hero component.
 */
function Hero() {
  return (
    // Hero section with a container for flex layout
    <div className="container flex flex-col justify-between items-center gap-4 lg:flex-row-reverse my-12">
      {/* Hero image */}
      <div className="flex-1">
        <img className="w-full h-auto" src={hero} alt="hero" />
      </div>

      {/* Hero content */}
      <div className="flex-1 text-center my-8 lg:text-left">
        {/* Main heading */}
        <h1 className="text-vdviolet text-3xl md:text-7xl font-bold">
          More than just shorter links
        </h1>

        {/* Subheading */}
        <p className="text-gviolet text-xl my-4">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>

        {/* Call-to-action button */}
        <button className="bg-cyan shadow-md rounded-full px-8 py-3 text-white font-bold border-2 border-cyan cursor-pointer ease-out duration-500 hover:scale-110 hover:bg-white hover:text-cyan">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
