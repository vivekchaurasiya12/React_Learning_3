# Restaurant Listing React Project

## Overview

This React project displays a restaurant listing with various components, mock data, and styles. 

### Components

- `Body.js`: Main content of the application.
- `Footer.js`: Footer section.
- `Header.js`: Header section.
- `RestaurantCard.js`: Individual restaurant cards.
- `App.js`: Root component.

### Data Files

- `constants.js`: Application constants.
- `mockData.js`: Mock data for development.

### Other Files

- `index.html`: Entry point HTML file.
- `style.css`: Styles for the application.

## Setup Instructions

### Clone the Repository

```bash
git clone <repository-url>

###Navigate to the Project Directory
cd <project-directory>

Install Dependencies
npm install

Start the Development Server
npm start

## Understanding the Project Structure
   Components
Body.js: Renders the main content.
Footer.js: Displays the footer.
Header.js: Shows the header.
RestaurantCard.js: Displays restaurant details.
App.js: Integrates all components.
   Data Files
constants.js : Contains constants.
mockData.js: Provides mock data.
   Other Files
index.html: Main HTML file.
style.css: Stylesheet for the application.



##Structure of page

//FOOD ORDERING APP
//Header
//  -LOGO
//  -Nav items
//Body
//  -search
//  -resturant coontainer
//  -restaurant cards
//        -image
//        -Name of restaurant, rating, cuisine, delivery time
//Footer
//   -copyright
//  -link
//   -Contact
//   -address


two types of import/export

1. default import/export

export default component;
import component from "path";

2. Named import/export

export const component/url_variable
import {component /url_variable} from "path"'

