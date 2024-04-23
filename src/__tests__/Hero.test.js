import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

/**
 * Test suite for rendering and styling of the Hero component.
 */
// In Hero.test.js
test("renders Hero component with correct main heading", () => {
  render(<Hero />);

  // Test if the main heading is rendered with the correct text
  const mainHeading = screen.getByText("More than just shorter links");
  expect(mainHeading).toBeInTheDocument();

  // Test if the main heading has the correct styles
  expect(mainHeading).toHaveClass("text-vdviolet");
  expect(mainHeading).toHaveClass("text-3xl");
  expect(mainHeading).toHaveClass("md:text-7xl");
  expect(mainHeading).toHaveClass("font-bold");
});

/**
 * Test case to check if the Hero component renders correct subheading.
 */
test("renders Hero component with correct subheading", () => {
  render(<Hero />);

  // Test if the subheading is rendered with the correct text
  const subheading = screen.getByText(
    "Build your brand's recognition and get detailed insights on how your links are performing."
  );
  expect(subheading).toBeInTheDocument();

  // Test if the subheading has the correct styles
  expect(subheading).toHaveClass("text-gviolet");
  expect(subheading).toHaveClass("text-xl");
  expect(subheading).toHaveClass("my-4");
});

/**
 * Test case to check if the Hero component renders correct call-to-action button.
 */
test("renders Hero component with correct call-to-action button", () => {
  render(<Hero />);

  // Test if the call-to-action button is rendered with the correct text
  const ctaButton = screen.getByText("Get Started");
  expect(ctaButton).toBeInTheDocument();

  // Test if the call-to-action button has the correct styles
  expect(ctaButton).toHaveClass("bg-cyan");
  expect(ctaButton).toHaveClass("shadow-md");
  expect(ctaButton).toHaveClass("rounded-full");
  expect(ctaButton).toHaveClass("px-8");
  expect(ctaButton).toHaveClass("py-3");
  expect(ctaButton).toHaveClass("text-white");
  expect(ctaButton).toHaveClass("font-bold");
  expect(ctaButton).toHaveClass("border-2");
  expect(ctaButton).toHaveClass("border-cyan");
  expect(ctaButton).toHaveClass("cursor-pointer");
  expect(ctaButton).toHaveClass("ease-out");
  expect(ctaButton).toHaveClass("duration-500");
  expect(ctaButton).toHaveClass("hover:scale-110");
  expect(ctaButton).toHaveClass("hover:bg-white");
  expect(ctaButton).toHaveClass("hover:text-cyan");
});
