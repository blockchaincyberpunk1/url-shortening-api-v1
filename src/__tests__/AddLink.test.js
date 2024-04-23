import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddLink from "../components/AddLink";

/**
 * Test suite for the AddLink component.
 */
// In AddLink.test.js
test("renders AddLink component correctly", () => {
  render(<AddLink />);

  // Test if the input field is rendered
  const inputElement = screen.getByPlaceholderText("Shorten a link here...");
  expect(inputElement).toBeInTheDocument();

  // Test if the 'Shorten It!' button is rendered
  const buttonElement = screen.getByText("Shorten It!");
  expect(buttonElement).toBeInTheDocument();
});

/**
 * Test case to check if the error message is displayed when submitting an empty link.
 */
test("displays error message when submitting an empty link", () => {
  render(<AddLink />);

  // Submit the form without entering a link
  const buttonElement = screen.getByText("Shorten It!");
  fireEvent.click(buttonElement);

  // Test if the error message is displayed
  const errorMessageElement = screen.getByText("Please add a link");
  expect(errorMessageElement).toBeInTheDocument();
});

/**
 * Test case to check if the link is shortened and the shortened link section is displayed on successful API call.
 */
test("shortens the link and shows the shortened link section on successful API call", async () => {
  // Mock the fetch API to return a successful response
  jest.spyOn(global, "fetch").mockResolvedValueOnce({
    json: async () => ({
      result: {
        short_link: "https://shortened-link.com/xyz",
      },
    }),
  });

  render(<AddLink />);

  // Enter a link in the input field
  const inputElement = screen.getByPlaceholderText("Shorten a link here...");
  fireEvent.change(inputElement, {
    target: { value: "https://www.example.com" },
  });

  // Submit the form
  const buttonElement = screen.getByText("Shorten It!");
  fireEvent.click(buttonElement);

  // Wait for the API call to resolve
  await screen.findByText("https://shortened-link.com/xyz");

  // Test if the shortened link section is displayed
  const shortenedLinkElement = screen.getByText(
    "https://shortened-link.com/xyz"
  );
  expect(shortenedLinkElement).toBeInTheDocument();
});
