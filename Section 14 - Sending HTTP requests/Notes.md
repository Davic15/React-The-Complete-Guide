### Section 14 - Sending HTTP requests (e.g. Connecting to a Database).

## Module Introduction.
    - How do React apps interact with Databases?.
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
    