import React from "react";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

/**
 * Main component rendering the entire application.
 * @returns {JSX.Element} App component.
 */
function App() {
  return (
    <>
      {/* Render the Header component */}
      <Header data-testid="header-component" />

      {/* Render the Hero component */}
      <Hero data-testid="hero-component" />

      {/* Render the Main component */}
      <Main data-testid="main-component" />

      {/* Render the Boost component */}
      <Boost data-testid="boost-component" />

      {/* Render the Footer component */}
      <Footer data-testid="footer-component" />
    </>
  );
}

export default App;
