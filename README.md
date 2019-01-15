## Brief

The challenge was to consume the API documented on http://hiring.rewardgateway.net/docs/ and output a list of employees in JavaScript. The end point sometimes will fail and that’s on purpose.

## Stack

This application was built using:

-   [Node](https://nodejs.org/en/) / [Express](https://expressjs.com/)
-   [React](https://reactjs.org/docs/create-a-new-react-app.html)
-   [Styled Components](https://www.styled-components.com/)

## Installation

CAVEATS: To run this project you need to have `node.js` and either `yarn` or `npm` installed. The frontend application uses the browser fetch API which is not supported on older browsers (e.g. Internet Explorer). Please ensure you use a modern browser to view the application (e.g. Chrome / Firefox).

Clone the project and from the root directory and run `yarn install` or `npm install`.

To run the node server, run `node server.js`.

To run the React application, open a new terminal window and run `yarn start` or `npm run start`.

You can view the frontend in your browser on [http://localhost:3000](http://localhost:3000).

## Testing

Tests were written using [Jest]('https://jestjs.io/') and [Enzyme](https://airbnb.io/enzyme/). You can run the tests using the command `yarn test` or `npm test` and then selecting the test options.

## Approach

There were two main challenges I faced when completing this task.

### 1. Cross-Origin Resource Sharing

The API response header did not have CORS enabled so I was not able to consume the data directly on the frontend React application.

As a result I had to setup my own node server to consume the API and relay the data to my frontend application.

### 2. Endpoint failure

To handle the API randomly failing, I setup my node server to auto retry and fetch the data at least 3 times before returning an error which is displayed on the frontend.

## Further Improvements

If I had more time to improve this application or in a production environment, I would save the API response to a database or cache it. Then I would setup a cron job to update the database or cache regularly. Depending on the API implementation it may alternatively be possible to setup a continuous integration task, for example a webhook to trigger the backend server to automatically fetch and save the data when the employee records change.

Then when a user visits the website the saved/cached data would be served rather than requesting the data again from the API each time.

With the data saved/cached, I would also move the pagination to the backend as requesting all items (1000) is not necessary. This can be handled by passing query params so the server only returns a subset of the data to be rendered.
