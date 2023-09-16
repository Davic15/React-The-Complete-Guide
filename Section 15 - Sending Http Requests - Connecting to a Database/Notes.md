### Section 15 - Sending HTTP requests (e.g. Connecting to a Database).

## Module Introduction.

    - How do React apps interact with Databases.
    - Sending HTTP requests and using responses.
    - Handling Errors and Loading State.

## How to (not) connect to a database.

    - Browser-side Apps don't directly talk to databases.
    - React App, can't connect directly to the Database (SQL, NoSQL, etc).
        - Database credentials would be exposed in the browser, performance issues, etc.
    - The Backend App (NodeJS App, PHP, etc), this app will communicate with the Database, and our React App will talk with the Backend.
        - It will secure our connection.

## Our Starting App and Backend.

    - API (Application Programming Interface).
    - We will use the Star Wars Api (Swapi).

## Sending a GET Request

    - Use fetch API.
    - It is async task, it will resolve in the future.
    - fetch.

## Using async / await

    - Fetch but with async await.

## Handling Loading & Data States

    - Using a new state for loading.

## Handling Http Errors

    - There are different types of errors.

## Using useEffect() for Requests

    - Call when the component renders for the first time.

## Preparing the project for the next steps

    - Firebase as backend.
