import React from "react";

/**
 * Component for displaying a main card with an image, heading, and description.
 * @param {Object} props - Component props.
 * @param {string} props.img - Image source URL.
 * @param {string} props.title - Title of the card.
 * @param {string} props.text - Description text.
 * @returns {JSX.Element} CardMain component.
 */
function CardMain(props) {
  // The CardMain component is a card with an image, heading, and description

  return (
    <div className="stair lg:mb-0 col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-md shadow-lg text-center lg:text-left relative pt-14 px-4 pb-4">
      {/* Image placed at the top, with a violet background, rounded corners, and centered using absolute positioning */}
      <div className="image absolute -top-8 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 rounded-full bg-dviolet p-4">
        <img src={props.img} alt="brand" />
      </div>

      {/* Heading with font size 2xl, violet text color, and bold */}
      <h3 className="text-2xl text-dviolet font-bold">{props.title}</h3>

      {/* Description with gray text color */}
      <p className="text-gray">{props.text}</p>
    </div>
  );
}

export default CardMain;
