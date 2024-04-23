# URL Shortening API

![URL Shortening API](./public/screenshot.png)

This is a simple URL Shortening API that allows users to shorten long URLs into more concise and shareable links.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How to Use](#how-to-use)
- [Built With](#built-with)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

This web application was created as part of the "Frontend Mentor" challenge. The goal was to develop a URL Shortening API that enables users to convert lengthy URLs into shorter ones. The application uses the [Bitly API](https://dev.bitly.com/api-reference) to generate the shortened links. The user can input any valid URL, and the API will return a shortened version, which can be copied and shared easily.

## Features

- Shorten URLs: Users can input any long URL and get a shortened version to share with others.
- Quick and Easy: The application is straightforward to use, requiring only the input of the desired URL.
- Copy to Clipboard: Users can copy the generated short link to their clipboard with a single click.
- Persistent Storage: The app uses local storage to remember the shortened links even after the browser is closed.

## How to Use

1. Clone this repository to your local machine or download the source code as a ZIP file.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
3. In the input field provided, enter the long URL you wish to shorten.
4. Click on the "Shorten It!" button to generate a shortened link.
5. The shortened link will be displayed below the input field.
6. To copy the short link, click on the "Copy" button next to it.
7. The app will store the shortened links in local storage for future reference.

## Built With

- React
- Tailwind CSS

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Frontend Mentor for providing the challenge and design.
- Sheneeza Volcov for coding the URL Shortening API.
