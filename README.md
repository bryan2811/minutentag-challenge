# Project Overview

This project is a web application built using Express.js, EJS, and Alpine.js. It's a product listing application where each product has multiple SKUs (Stock Keeping Units). The application fetches the price and stock information for each SKU from an API endpoint and updates the UI accordingly.

## Project Structure

- **src/server.js**: This is the main entry point of the application. It sets up the Express.js server, static file serving, view engine, and routes.
- **views**: This directory contains the EJS templates for the application. The `home.ejs` file is for the home page, and the `product-detail.ejs` file is for the product detail page.
- **public**: This directory contains the static files for the application, such as Images, CSS and JavaScript files.
- **scss**: This directory contains the SCSS files for the application. The `home.scss` file is for the home page, and the `product-detail.scss` file is for the product detail page.
- **package.json**: This file contains the project's npm configuration, which includes the project's dependencies and scripts.

## How to Start the Project

1. **Install the dependencies**: Run `npm install` in the project directory to install the dependencies defined in the `package.json` file.
2. **Start the server**: Run `npm start` to start the Express.js server and the SCSS compiler. The start script is defined in the `package.json` file and uses concurrently to run the server and the SCSS compiler at the same time.

The application will be available at `http://localhost:3000`.

## How the Project Works

When you start the application and navigate to the home page, the application fetches the product data and renders the home page using the `home.ejs` template. Each product is displayed with its image, brand, style, and a dropdown to select a SKU. The price and stock information for the selected SKU is fetched from the API and displayed on the page. The price information is updated every 5 seconds.

When you navigate to a product detail page, the application fetches the data for that product and renders the page using the `product-detail.ejs` template. The page displays the product's image, brand, style, and a dropdown to select a SKU. The price and stock information for the selected SKU is fetched from the API and displayed on the page. The price information is updated every 5 seconds.

The application uses Alpine.js for the interactive elements on the page, such as the SKU dropdown and the price update. The styles for the application are written in SCSS and compiled to CSS using the sass npm package.
