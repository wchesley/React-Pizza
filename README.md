# Assignment 3: React Pizza - Complete Web Implementation

## Deliverables: 

### Assignment 3

Assignment 3 - Pizza Bandit Signup and Ordering

You've followed along with me all semester so far with the Pizza Bandit program.  This assignment sees us completing that assignment for the ReactJS-only portion of the course.  You'll accomplish and complete the following:

* Create a basic ReactJS app
* Create a form that allows a user to sign up with an account
    email and password
    save this information to Firebase
* Create a form that allows a user to order a pizza
    user must be signed in
    use location services to get lat/lon
    use a web service to get ZIP code from lat lon
    select from three pizzas - cheese, pepperoni, and supreme
* Order sourcing and order saving
* Using ZIP code find nearby Pizza places - we'll use a real web service here
* Confirmation and delivery screen
    finalize delivery street address
    show delivery street address on mapbox
    You'll save the order to Firebase
    You'll confirm the order via an email

This is a significant undertaking and the remainder of our class time between then and now will focus on these requirements.

The first eight chapters of the Thomas book are instructive in getting this completed.

#### Submitting your Work

You'll deliver this app via the following means:

* Github repository URL
* Zipped up and uploaded here

## To run locally: 

To run on your own machine clone this repository, then, in the root of this repo, run <br>`npm install`<br>After the initial install, there are a few other further dependencies to satify, 

* react-router-dom: this can be installed by 
    `npm install --save react-router-dom` 
* firebase: this is installed by
    `npm install firebase`

This will satisfy any missing dependencies, once node has installed for this app you can start dev server via `npm start`

This should automatically open your default browser to http://localhost:3000<br>
To stop the server, press Control-C in the console.<br>
Created following [this tutorial](https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm)<br>
There are two sets of instructions on this page, this version was built via create-react-app tool (second set of instructions listed on page) 

## TODO: 
* Rendering in checkout page
* Data handling across pages
* Database
* Maps integration
* Prepp for conversion to React-native

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

This repo does not have any tests configured yet. 



## Learn More - Autogenerated by create-react-app

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
