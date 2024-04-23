import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../components/Header";

/**
 * Test suite for rendering and styling of the Header component.
 */
// In Header.test.js
test("renders Header component with correct logo", () => {
  render(<Header />);

  // Test if the logo is rendered with the correct alt text and src attribute
  const logoElement = screen.getByAltText("logo");
  expect(logoElement).toBeInTheDocument();
  expect(logoElement).toHaveAttribute("src", "path/to/logo.svg");
});

/**
 * Test case to check if the Header component renders correct navigation links.
 */
test("renders Header component with correct navigation links", () => {
  render(<Header />);

  // Test if the navigation links are rendered with the correct text
  const featuresLink = screen.getByText("Features");
  const pricingLink = screen.getByText("Pricing");
  const resourcesLink = screen.getByText("Resources");

  expect(featuresLink).toBeInTheDocument();
  expect(pricingLink).toBeInTheDocument();
  expect(resourcesLink).toBeInTheDocument();

  // Test if the navigation links have the correct styles
  expect(featuresLink).toHaveClass("navli");
  expect(pricingLink).toHaveClass("navli");
  expect(resourcesLink).toHaveClass("navli");
});

/**
 * Test case to check if the Header component renders correct login and sign-up links.
 */
test("renders Header component with correct login and sign-up links", () => {
  render(<Header />);

  // Test if the login and sign-up links are rendered with the correct text
  const loginLink = screen.getByText("Login");
  const signUpLink = screen.getByText("Sign Up");

  expect(loginLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();

  // Test if the login and sign-up links have the correct styles
  expect(loginLink).toHaveClass("text-gray");
  expect(signUpLink).toHaveClass("text-white");
});

/* 
Replace "path/to/logo.svg" with the actual path to the logo image.
Replace "Toggle Mobile Menu" with the actual accessible label for the hamburger icon.
*/
