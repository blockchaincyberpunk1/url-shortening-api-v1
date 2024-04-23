import React from "react";

/**
 * Component for boosting links.
 * @returns {JSX.Element} Boost component.
 */
function Boost() {
  // The Boost component is a simple form with a heading and a button

  return (
    <div className="form py-8 text-center bg-dviolet">
      {/* Heading with white text, font size 4xl, and bold */}
      <h3 className="text-white text-4xl my-4 font-bold">
        Boost your links today
      </h3>

      {/* Button with background color cyan, shadow effect, rounded corners, padding, and white text */}
      <button className="bg-cyan my-4 shadow-md rounded-full px-8 py-3 text-white font-bold border-2 border-cyan cursor-pointer ease-out duration-500 hover:scale-110 hover:bg-transparent hover:text-cyan">
        Get Started
      </button>
    </div>
  );
}

export default Boost;
