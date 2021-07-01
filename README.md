# hashbrown-challenge WIP

This application was bootstrapped with create-react-app. The boilerplate README content for that library can be found below.

You're looking at the code for this project in the `main` branch. This is the more... rough version of code that includes some hopefully insightful efforts to integrate the Twitter API.

In order to see the UI only version of this application with only mocked data, checkout the branch `mocked` then follow the README instructions there.

As for the direction this application was _supposed_ to go:
 - With a Twitter Developer Account, an API Secret and API Key have been aquired and kept in a .env.localfile as environment variables that the React application has access to.
 - On Mount, the application should hit the Twitter API to create a Bearer token for application authorization (public information only)
 - That Bearer token is captured in a scoped variable so it is not easily accessible by bad actors.
 - The Bearer token is used as an Authorization header for making queries to the Twitter API to search by hashtag
 - On Unmount, the Bearer token is invalidated.

The above flow is described in the [Twitter Application-only authentication and OAuth 2.0 Bearer Token Docs](https://developer.twitter.com/en/docs/authentication/oauth-2-0/application-only)

The problem that I am having is that all of my requests to the Twitter API from the client are blocked due to CORS.

A path to (hopefully) solve this issue that I plan to undertake is to create a Node.js server (with Express.js to handle the routes), host this React application on that server, then make fetches to the Twitter API from the server. The React application would hit the server then the server would hit Twitter.

### Wait! There's more:

To see the initial work of using an Express server to host this app, switch to the branch `try-a-server`. It's still not complete, but it's something, I guess.

You can also find tests in the branch `some-tests`.

Both of those branches have README files pertinent to their current state.

# Boiler plate below


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
