import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

/**
 * Test suite for rendering components in the App component.
 */
// In App.test.js
test("renders Header component", () => {
  render(<App />);

  // Test if the Header component is rendered
  const headerComponent = screen.getByTestId("header-component");
  expect(headerComponent).toBeInTheDocument();
});

/**
 * Test case to check if the Hero component is rendered.
 */
test("renders Hero component", () => {
  render(<App />);

  // Test if the Hero component is rendered
  const heroComponent = screen.getByTestId("hero-component");
  expect(heroComponent).toBeInTheDocument();
});

/**
 * Test case to check if the Main component is rendered.
 */
test("renders Main component", () => {
  render(<App />);

  // Test if the Main component is rendered
  const mainComponent = screen.getByTestId("main-component");
  expect(mainComponent).toBeInTheDocument();
});

/**
 * Test case to check if the Boost component is rendered.
 */
test("renders Boost component", () => {
  render(<App />);

  // Test if the Boost component is rendered
  const boostComponent = screen.getByTestId("boost-component");
  expect(boostComponent).toBeInTheDocument();
});

/**
 * Test case to check if the Footer component is rendered.
 */
test("renders Footer component", () => {
  render(<App />);

  // Test if the Footer component is rendered
  const footerComponent = screen.getByTestId("footer-component");
  expect(footerComponent).toBeInTheDocument();
});
