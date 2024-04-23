import React, { useState } from "react";

/**
 * Component for adding and shortening links.
 * @returns {JSX.Element} AddLink component.
 */
function AddLink() {
  // State variables to manage link input, shortened link result, and error message
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Event handler for input change.
   * @param {Object} e - Event object.
   */
  const handleChange = (e) => {
    setLink(e.target.value);
  };

  /**
   * Function to shorten link using the API.
   */
  const shortenLinkUsingAPI = () => {
    const requestBody = {
      long_url: link,
      domain: "bit.ly",
      group_guid: "Ba1bc23dE4F",
    };
  
    fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BITLY_ACCESS_TOKEN}`, // Access token from environment variable
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setShortenedLink(data.link);
      })
      .catch(() => {
        setErrorMessage("An error occurred while shortening the link.");
      });
  };
  

  /**
   * Event handler for form submission.
   * @param {Object} e - Event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!link) {
      setErrorMessage("Please add a link"); // If link is empty, set an error message
      return;
    }

    setErrorMessage(""); // Clear any previous error messages
    shortenLinkUsingAPI(); // Call the function to shorten the link using the API
  };

  /**
   * Event handler for copying the shortened link to clipboard.
   * @param {string} shortLink - Shortened link to copy.
   */
  const handleCopy = (shortLink) => {
    navigator.clipboard.writeText(shortLink); // Copy the shortened link to clipboard
    alert("Copied to clipboard!"); // Show an alert to indicate successful copy
  };

  return (
    <section>
      <div className="form absolute w-11/12 left-1/2 -translate-x-1/2 -top-16 bg-dviolet rounded-md p-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-12 gap-5 md:gap-3 justify-center items-center"
        >
          <div className="col-span-12 md:col-span-10 relative">
            <input
              value={link}
              onChange={handleChange}
              type="text"
              name="link"
              id="link"
              className="p-4 rounded-md w-full"
              placeholder="Shorten a link here..."
            />
            <label
              htmlFor="link"
              className={`absolute -bottom-6 left-2 ${
                errorMessage ? "" : "hidden"
              } text-red-500`}
            >
              {errorMessage}
            </label>
          </div>
          <button
            type="submit"
            className="p-4 rounded-md bg-cyan hover:opacity-90 text-white col-span-12 md:col-span-2"
          >
            Shorten It!
          </button>
        </form>
      </div>
      <div className="short-links md:-mt-5 mt-5 w-11/12 mx-auto" id="hill">
        {/* Display the shortened link section only if there's a shortened link */}
        {shortenedLink && (
          <div className="bg-white my-4 shadow-md p-4 rounded-md grid grid-cols-12 justify-between items-center gap-2">
            <div className="col-span-12 md:col-span-7 text-dviolet">
              {link} {/* Display the original link */}
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-12 md:grid-cols-5 justify-between items-center gap-2">
              <div className="hill col-span-12 md:col-span-3 text-center text-cyan">
                {shortenedLink} {/* Display the shortened link */}
              </div>
              <button
                className="copy col-span-12 md:col-span-2 bg-cyan text-white rounded-md p-3 text-lg hover:opacity-50"
                onClick={() => handleCopy(shortenedLink)}
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AddLink;
