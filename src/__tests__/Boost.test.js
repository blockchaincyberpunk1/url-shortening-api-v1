import React from "react";
import { render, screen } from "@testing-library/react";
import Boost from "../components/Boost";

/**
 * Test suite for rendering and styling of the Boost component.
 */
// In Boost.test.js
test("renders Boost component heading", () => {
  render(<Boost />);

  // Test if the heading text is rendered with the correct styles
  const headingElement = screen.getByText("Boost your links today");
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveClass("text-white");
  expect(headingElement).toHaveClass("text-4xl");
  expect(headingElement).toHaveClass("my-4");
  expect(headingElement).toHaveClass("font-bold");
});

/**
 * Test case to check if the button in the Boost component is rendered with the correct styles.
 */
test("renders Boost component button", () => {
  render(<Boost />);

  // Test if the button is rendered with the correct styles
  const buttonElement = screen.getByText("Get Started");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("bg-cyan");
  expect(buttonElement).toHaveClass("my-4");
  expect(buttonElement).toHaveClass("shadow-md");
  expect(buttonElement).toHaveClass("rounded-full");
  expect(buttonElement).toHaveClass("px-8");
  expect(buttonElement).toHaveClass("py-3");
  expect(buttonElement).toHaveClass("text-white");
  expect(buttonElement).toHaveClass("font-bold");
  expect(buttonElement).toHaveClass("border-2");
  expect(buttonElement).toHaveClass("border-cyan");
  expect(buttonElement).toHaveClass("cursor-pointer");
  expect(buttonElement).toHaveClass("ease-out");
  expect(buttonElement).toHaveClass("duration-500");
  expect(buttonElement).toHaveClass("hover:scale-110");
  expect(buttonElement).toHaveClass("hover:bg-transparent");
  expect(buttonElement).toHaveClass("hover:text-cyan");
});
