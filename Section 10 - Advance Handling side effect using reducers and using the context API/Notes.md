### Section 10 - Advance Handling side effect using reducers and using the context API

## Module Introduction.
    - Effects, Reducers and Context.
        - Advanced, yet super-important fatures.
    - Working with side effects.
    - Managing more complex state with reducers.
    - Managing app-wide or component-wide state with context.

## What are side effects and introducion useEffect.
    - Main Job: Render UI and React to user input.
        - Evaluate and Render JSX, manage state and props, reevalue components.
    - Side Effects: anything else
        - Store data in browser storage, send http requests to backend servers, timers.
        - These are out of the normal component function.
    - useEffect has two arguments.
        - A function that should be executed after every component evaluation if the specified dependencies changed.
            - Side Effect code goes here.
        - Dependencies of this effect, the function only runs if the dependencies changed.
            - Specify your dependecies of your function here.

## Using the useEffect() hook.
    - It will run depending of the dependecy, could run once, or many times.

## useEffect and Dependencies.