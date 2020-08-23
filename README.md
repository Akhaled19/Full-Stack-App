# Full-Stack-App

## How to Start API

To get up and running with this project, run the following commands from the root of the folder that contains this README file.

* First, install the project's dependencies using npm.
npm install

* Lastly, start the application.
 npm start
 To test the Express server, browse to the URL http://localhost:5000/.

## Client Side

In the project directory, you can run:

### npm start

Runs the app in the development mode.
Open http://localhost:5000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

### npm run eject

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

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

### npm run build fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## About project

This project is a Frontend React client built for a previous REST API I made. This fullstack application is a School Database where users can create an account and log in to. After making an account they are able to create, view, update, and delete courses that they have created in the database. The client side of this app is built in React, a powerful open-source library used to build interactive user interfaces. The client side also utilizes React Router, a library used to create routing for applications since React itself does not come with its own routing capabilities. React is very useful for this application because you can make reusable components to make development time faster and less redundant. React also uses "state management", a feature which allows for different components to be able to store and pass around the application more easily. Lastly, this application uses basic authentication form to allow users to log in and create/edit/delete courses that are tied to their account.

This project also uses a REST API to create, read, update, and delete course and user data stored in a database. It uses one of the most popular databases(SQLite) to store data. Additionally, this app uses Node.JS and Sequelize to perform CRUD(Create, Read, Update, and Delete) operations that allow a user to update the database with new or existing information as well as delete information. The API will provide a way for users to administer a school database containing information about courses: users can interact with the database by retrieving a list of courses, as well as adding, updating and deleting courses in the database. In addition, the project will require users to create an account and log-in to make changes to the database.


### For a live demo of this project, go to this link: COMING SOON

## Task 

My task for this project is create a full fledged fullstack application that uses a modern tech stack(React, NodeJS, SQL, HTML, JS, CSS). This is also the client side application for a REST API I built previously.
### Features
1. Users can create, read, update, and delete courses
2. Users can create an account
3. User data persistance using cookies
4. Private routes that secures other user data from unauthorized users
5. Error validation for all forms

## This project taught me how to:

* Use JavaScript and JSX to build out the components for my application in a modular fashion.
* Allow users to sign up and use basic authentication to support users signing in.
* Make requests to REST API via client side with Fetch API.
* Use Context API in React to allow data to sit at the top of the application and be passed down to components that need specific data as opposed to using prop drilling which can be both tedious and often requires you to send data through components that don't need that data.
* Implement private routes that keep unauthorized users from editing deleting data that they are not supposed to.
* Make an application responsive to different screen sizes using Flex box.
* Connect a client side application to a REST API
* Use Cookies to persist user data

## Technology Used

This project uses the following technologies:

* SQLite(https://www.sqlite.org/index.html)
* Sequelize ORM(https://sequelize.org/)
* Node.js(https://nodejs.org/en/)
* React(https://reactjs.org/)
* React Router(https://reactrouter.com/)
* JavaScript
* CSS

NPM Packages

* basic-auth(https://www.npmjs.com/package/basic-auth)
* bcryptjs(https://www.npmjs.com/package/bcryptjs)
* sequelize-cli(https://www.npmjs.com/package/sequelize-cli)
* express-validator(https://www.npmjs.com/package/express-validator)
* react-router(https://reactrouter.com/)
* js-cookie(https://github.com/js-cookie/js-cookie)
* react-markdown(https://rexxars.github.io/react-markdown/)
