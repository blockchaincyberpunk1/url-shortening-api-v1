import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

/**
 * Test suite for rendering and styling of the Footer component.
 */
// In Footer.test.js
test("renders Footer component with correct company name", () => {
  render(<Footer />);

  // Test if the company name is rendered with the correct text
  const companyNameElement = screen.getByText("Shortly");
  expect(companyNameElement).toBeInTheDocument();

  // Test if the company name is rendered with the correct styles
  expect(companyNameElement).toHaveClass("text-4xl");
  expect(companyNameElement).toHaveClass("text-white");
  expect(companyNameElement).toHaveClass("font-bold");
});

/**
 * Test case to check if the Footer component renders correct lists of features, resources, and company-related links.
 */
test("renders Footer component with correct lists of features, resources, and company-related links", () => {
  render(<Footer />);

  // Test if the lists of features, resources, and company-related links are rendered with the correct text
  const featuresList = screen.getByRole("list", { name: /features/i });
  const resourcesList = screen.getByRole("list", { name: /resources/i });
  const companyList = screen.getByRole("list", { name: /company/i });

  expect(featuresList).toBeInTheDocument();
  expect(resourcesList).toBeInTheDocument();
  expect(companyList).toBeInTheDocument();

  // Test if the list items in each list are rendered with the correct text
  const featureLinks = screen.getAllByRole("link", {
    name: /features|link shortening|branded links|analytics/i,
  });
  const resourceLinks = screen.getAllByRole("link", {
    name: /resources|blog|developer|support/i,
  });
  const companyLinks = screen.getAllByRole("link", {
    name: /company|about|our teams|careers|contact/i,
  });

  expect(featureLinks).toHaveLength(4);
  expect(resourceLinks).toHaveLength(4);
  expect(companyLinks).toHaveLength(5);

  // Test if the links are rendered with the correct styles
  featureLinks.forEach((link) => {
    expect(link).toHaveClass("font-bold");
    expect(link).toHaveClass("text-white");
  });

  resourceLinks.forEach((link) => {
    expect(link).toHaveClass("font-bold");
    expect(link).toHaveClass("text-white");
  });

  companyLinks.forEach((link) => {
    expect(link).toHaveClass("font-bold");
    expect(link).toHaveClass("text-white");
  });
});

/**
 * Test case to check if the Footer component renders correct social media icons.
 */
test("renders Footer component with correct social media icons", () => {
  render(<Footer />);

  // Test if the social media icons are rendered with the correct alt text and src attributes
  const facebookIcon = screen.getByAltText("social");
  const twitterIcon = screen.getByAltText("social");
  const pinterestIcon = screen.getByAltText("social");
  const instagramIcon = screen.getByAltText("social");

  expect(facebookIcon).toBeInTheDocument();
  expect(facebookIcon).toHaveAttribute("src", "path/to/facebook/icon");

  expect(twitterIcon).toBeInTheDocument();
  expect(twitterIcon).toHaveAttribute("src", "path/to/twitter/icon");

  expect(pinterestIcon).toBeInTheDocument();
  expect(pinterestIcon).toHaveAttribute("src", "path/to/pinterest/icon");

  expect(instagramIcon).toBeInTheDocument();
  expect(instagramIcon).toHaveAttribute("src", "path/to/instagram/icon");

  // Test if the social media icons are rendered with the correct styles
  const socialMediaIcons = screen.getAllByRole("img", { name: /social/i });
  socialMediaIcons.forEach((icon) => {
    expect(icon).toHaveClass("flex");
    expect(icon).toHaveClass("justify-center");
    expect(icon).toHaveClass("items-center");
    expect(icon).toHaveClass("mt-4");
    expect(icon).toHaveClass("py-2");
    expect(icon).toHaveClass("gap-6");
    expect(icon).toHaveClass("text-gray");
  });
});
