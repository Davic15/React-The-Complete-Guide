### Section 11 - Advance Handling side effect using reducers and using the context API

## Module Introduction.

    - Effects, Reducers and Context.
        - Advanced, yet super-important fatures.
    - Working with side effects.
    - Managing more complex state with reducers.
    - Managing app-wide or component-wide state with context.

## What are side effects and introducting useEffect.

    - Main Job: Render UI and React to user input.
        - Evaluate and Render JSX, manage state and props, re-evalue components.
        - React to user events.
    - Side Effects: anything else
        - Store data in browser storage, send http requests to backend servers, timers.
        - These are out of the normal component function.
    - useEffect has two arguments.
        - A function that should be executed after every component evaluation if the specified dependencies changed.
            - Side Effect code goes here.
        - Dependencies of this effect, the function only runs if the dependencies changed.
            - Specify your dependencies of your function here.

## Using the useEffect() hook.

    - It will run depending of the dependecy, could run once, or many times.

## useEffect and Dependencies.

    - Side Effect when the user types anything.

## What to add and not to add as dependencies

    - Don't add state of a function.
    - Don't need to add built-in API or functions
    - Don't need to add variables or functions, defined outside of our component.

## Using the effect Cleanup function.

    - We can return a function.

## useEffect summary.

    - useEffect and useState are the most used hooks.
    - If we don't give it a argument, it will run for every change of state.

## Introducing useReducer and Reducers in General.

    - Sometimes we have more complex states, for example, if it got multiple states, multiple ways of changing it or dependencies to other states.
    - useState() then often becomes hard or error-prone to use, it's easy to write bad, inefficient or buggy code in such scenarios.
    - useReducer() can be used as a replacement for useSate() if you need "more powerful state management".
    - Update a state that depends of other state.

## Using the useReducer() hook.

    - const [state, dispatchFn] = useReducer (reduceFn, initialState, initFn);
        - state: The state snapshot used in the component render cycle
        - dispatchFn: A function that can be used to dispatch a new action (i.e. trigger an update of the state).
        - reducerFn: (prevStatem action) => newState: A function that is triggered automatically once an action is dispatched (via dispatchFn()) - it received the latest state snapshot and should return the new, update state.
        - initialState: The initial state.
        - initFn: A function to set the initial state programmatically.
    - It returns an array with two values.
        - Latest state snapshot.
        - Function to update the snapshot.
    - Reducer function is a function that is triggered automatically once an action is dispatched.
    - The initial state.
    - Function to set the initial state programmatically.
    - The reducer function is written outside the component.

## useReducer vs useState for state management.

    - We will know when to use useState and useReducer.
    - useState
        - The main state management tool.
        - Great for independent pieces of state / data.
        - Great if state updates are easy and limited to a few kinds of updated.
    - useReducer
        - Great if you need more power.
        - Should be considered if you have related pieces of state/data.
        - Can be helpful if you have more complex sate updates.

## Introducing React Context (Context API).

    - Share information to any component, even when they don't have a direct connection.
    - Using props we need to send them up to the main component and later move it the component that is required.
    - With React Context we can create a context to any information and move it to other component in an easier way.

## Using the React Context API.

    - To use it.
        - We need to provide it.
        - We need to consume it.
    - Wrap all the components that listen that context.
        - All main and inner components will have access to the context.

## useContext hook.

    - A bit easier than normal Context.

## Making context dynamic.

    - props are to pass data to components.
    - context is to log in or log out.

## Building and using a custom context provider component.

    - We can create a context to handle login and log out.

## React context limitations.

    - React context is not optimized for high frequency changes.
    - Don't use for large applications.

## Learning the Rules of Hooks.

    - PDF file attached here.
    - Only call React Hooks in React Functions.
        - React components functions.
        - Custom hooks.
    - Only call React hooks at the top level.
        - Don't call them in nested functions.
        - Don't call them in any block statements.
    - Extra rule for useEffect(), always add eveything you refer to inside of useEffect() as a dependency.

## Refactoring an Input Component.

    - Create a new Input component and move the inputs there.

## Diving into "Forward Refs".

    - Change the input to accept refs (useRef) from outside.
