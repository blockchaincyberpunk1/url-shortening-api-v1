import React from "react";
import AddLink from "./AddLink";
import CardMain from "./CardMain";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";

/**
 * Component for displaying the main section of the web page.
 * @returns {JSX.Element} Main component.
 */
function Main() {
  return (
    // Main section with background color and spacing
    <main className="bg-slate-200 mt-32 pt-28 lg:pt-16 pb-28 relative">
      {/* Render the AddLink component */}
      <AddLink />

      {/* Statistics section */}
      <section>
        {/* Title and description */}
        <div className="text-center w-full max-w-lg mx-auto px-1 mt-9 mb-20">
          <h2 className="text-dviolet my-4 text-3xl font-bold">
            Advanced Statistics
          </h2>
          <p className="text-gray">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* Cards section */}
        <div className="container grid grid-cols-6 justify-center items-center md:gap-4 gap-14 mb-12">
          {/* Card for Brand Recognition */}
          <CardMain
            img={brand}
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
          />

          {/* Card for Detailed Records */}
          <CardMain
            img={detailed}
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />

          {/* Card for Fully Customizable */}
          <CardMain
            img={fully}
            title="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
