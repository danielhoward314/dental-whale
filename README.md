# Dental Whale Assessment
Hi, I'm Daniel Howard and I'd love to build stylish SPA apps for you!

## Local setup
* Clone the repo
* `npm install`

## Run
* `npm start` and access on localhost:8080
* The app is served by webpack-dev-server.

## Dependencies
* I've kept dependencies to a minimum.
* The bulk of the dev-dependencies are for Babel or Webpack.

## Implementation
* State management is done through a useReducer hook.
* In the todo app, I had to troubleshoot assigning refs (in the world of React Hooks) when mapping over data. I tracked down a solution by none other than one of the authors of React Hooks here in [this issue comment](https://github.com/facebook/react/issues/14072#issuecomment-446777406)
