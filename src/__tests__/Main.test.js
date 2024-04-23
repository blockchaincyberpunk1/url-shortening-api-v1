import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "../components/Main";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";

/**
 * Test suite for rendering and functionality of the Main component.
 */
// In Main.test.js
test("renders Main component with correct title and description", () => {
  render(<Main />);

  // Test if the title is rendered with the correct text
  const title = screen.getByText("Advanced Statistics");
  expect(title).toBeInTheDocument();

  // Test if the title has the correct styles
  expect(title).toHaveClass("text-dviolet");
  expect(title).toHaveClass("my-4");
  expect(title).toHaveClass("text-3xl");
  expect(title).toHaveClass("font-bold");

  // Test if the description is rendered with the correct text
  const description = screen.getByText(
    "Track how your links are performing across the web with our advanced statistics dashboard."
  );
  expect(description).toBeInTheDocument();

  // Test if the description has the correct styles
  expect(description).toHaveClass("text-gray");
});

/**
 * Test case to check if the Main component renders correct CardMain components.
 */
test("renders Main component with correct CardMain components", () => {
  render(<Main />);

  // Test if the CardMain components are rendered with the correct titles and texts
  const brandCard = screen.getByText("Brand Recognition");
  const detailedCard = screen.getByText("Detailed Records");
  const customizableCard = screen.getByText("Fully Customizable");

  expect(brandCard).toBeInTheDocument();
  expect(detailedCard).toBeInTheDocument();
  expect(customizableCard).toBeInTheDocument();

  // Test if the CardMain components have the correct props
  expect(brandCard).toHaveAttribute("img", brand);
  expect(brandCard).toHaveAttribute(
    "text",
    "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
  );

  expect(detailedCard).toHaveAttribute("img", detailed);
  expect(detailedCard).toHaveAttribute(
    "text",
    "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
  );

  expect(customizableCard).toHaveAttribute("img", fully);
  expect(customizableCard).toHaveAttribute(
    "text",
    "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
  );
});
