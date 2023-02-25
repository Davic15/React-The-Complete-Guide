### Section 19 - Advanced Redux.
## Module Introduction.
    - Handling async tasks with Redux.
    - Where to put our code.
    - The Redux Devtools

## Redux and side effects (and asynchronous code).
    - Reducers must be pure, side-effect free, synchronous functions.
    - Input (old state + action) => Outout (new state).
    - Where should side-effect and async task be executed?.
        - Inside the component (useEffect).
        - Inside the action creators.