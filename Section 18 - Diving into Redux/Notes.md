### Section 18 - Diving into Redux (An alternative to the context API).
## Module introduction.
    - Managing App-Wide State with Redux.
    - What is Redux? And Why?.
    - Redux Basics and Using Redux with React.
    - Redux Toolkit.

## Another look at state in React Apps.
    - What is Redux?
        - A state management system for cross-component or app-wide state.
    - What is cross-component / app-wide state.
        - Local state.
            - State that belongs to a single component.
            - Example, listening to user input in an input field.
            - Should be managed component-internal with useState, useReducer
        - Cross-Component state.
            - State that affects multiple components.
            - Example, open/close state of a modal overlay.
            - Requires props chains / props drilling.
        - App-wide state.
            - State that affects the entire app (most / all components).
            - Example, user authentication status.
            - Requires props chain / props drilling.

## Redux vs React Context
    - What is Redux?
        - A state management system for cross-component or app-wide state.
    - React Context - Potential disadvantages.
        - Complex setup / Management.
        - Performance.
        - In more complex apps, managing React Context can lead to deeply nested JSX code and / or huge "Context provider" components.
        - React context is not optimized for high-frequency state changes.

## How Redux works.
    - Core Redux Concepts.
        - Central Data (state) store, (it is just one big store).
            - Use inside components using subscriptions.
                - Components don't directly manipulate the data in the store.
                - Components trigger (dispatch) actions.
                - The action is forwarded to the Reducer Function
            - We can use a Reducer function.
                - It is not the useReducer hook, this is a general concept.
                - The reducer mutates (change) Store data.

## Exploring the core Redux Concepts.
    - The Reducer Function.
        - It handle 2 inputs, old state and the dispatched action.
        - The output is a new state object.
        - It should be a pure function (same input leads to same output).

## Providing the store
    - It is done in the index.js, the root file of our React app.

## How to work with redux state correctly.
    - We always need to send all states, otherwise the previous will be deleted.

## Redux Challenges and Introducing Redux Toolkit.
    - If the app grows up too much, the types could be a problem.
    - We have only one Redux store.