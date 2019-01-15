## Brief

The challenge was to consume the api documented on http://hiring.rewardgateway.net/docs/. The task was to consume the data this API generates and output it as a list of
employees. The end point sometimes will fail and that’s on purpose.

## Stack

This application was built using:

-   [Node](https://nodejs.org/en/) / [Express](https://expressjs.com/)
-   [React](https://reactjs.org/docs/create-a-new-react-app.html)
-   [Styled Components](https://www.styled-components.com/)

## Installation

Clone the project and from the root directory and run `yarn install` or `npm install`.

To run the node server, run `node server.js`.

To run the React application, open a new terminal window and run `yarn start` or `npm run start`.

You can view the frontend in your browser on [http://localhost:3000](http://localhost:3000).

## Testing

Tests were written using [Jest]('https://jestjs.io/') and [Enzyme](https://airbnb.io/enzyme/). You can run the tests using the command `yarn test` or `npm test`
You can run the application tests

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Approach

There were two main challenges I had when completing the challenge.

### 1. Cross-Origin Resource Sharing

The API response header did not have CORS enabled so I was not able to consume the data directly on the frontend React application.

As a result I had to setup my own node server to consume the API and relay the data to my frontend application.

### 2. Endpoint failure

To handle the API randomly failing, I setup my node server to auto retry and fetch the data at least 3 times before returning an error which is displayed on the frontend.

## Further Improvements

If I had more time or in a production environment, I either save the API response to a database or cache it, and setup a cron job to update the database or cache regularly. Then when a user visits the website the saved/cached data would be served rather than requesting the data again from the API each time.

I would also move the pagination to the backend as requesting all items (1000) is not necessary. This can be handled by passing query params so the server only returns a subset of the data.
