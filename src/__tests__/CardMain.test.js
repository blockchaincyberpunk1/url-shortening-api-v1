import React from "react";
import { render, screen } from "@testing-library/react";
import CardMain from "../components/CardMain";

/**
 * Test suite for rendering and styling of the CardMain component.
 */
// In CardMain.test.js
test("renders CardMain component with correct image", () => {
  const testProps = {
    img: "test-image-url",
    title: "Test Heading",
    text: "Test Description",
  };
  render(<CardMain {...testProps} />);

  // Test if the image is rendered with the correct URL
  const imageElement = screen.getByAltText("brand");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", "test-image-url");
});

/**
 * Test case to check if the CardMain component is rendered with correct heading and description.
 */
test("renders CardMain component with correct heading and description", () => {
  const testProps = {
    img: "test-image-url",
    title: "Test Heading",
    text: "Test Description",
  };
  render(<CardMain {...testProps} />);

  // Test if the heading and description are rendered with the correct text
  const headingElement = screen.getByText("Test Heading");
  const descriptionElement = screen.getByText("Test Description");
  expect(headingElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();

  // Test if the heading is rendered with the correct styles
  expect(headingElement).toHaveClass("text-2xl");
  expect(headingElement).toHaveClass("text-dviolet");
  expect(headingElement).toHaveClass("font-bold");

  // Test if the description is rendered with the correct styles
  expect(descriptionElement).toHaveClass("text-gray");
});
