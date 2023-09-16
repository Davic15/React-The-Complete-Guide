### Section 13 - A Look Behind the Scenes of React and Optimization Techniques

## Module introduction

    - How React works.
    - Virtual DOM and DOM updates.
    - State and state updates.

## How React Really works.

    - React.
        - A JavaScript library for building user interfaces.

    - Components.
        - Real DOM, what the user sees.
        - Props, data from parent component.
        - Context, component wide data.
        - State, internal data.

    - ReactDOM
        - Interface to the web.

    * Components.
        - React determines how the component tree currently looks like and what is should look like.
        - ReactDOM receives the differences (example, required changes) and then manipulates the real DOM.

    - Re-evaluating components !== Re-rendering the DOM.
        - Components
            - Re-evaluate whenever props, state or context changes.
            - React executes component functions.
        - Real DOM
            - Changes to the real DOM are only made for differences between evaluation.

    - Virtual DOM Diffing
        - Previous Evaluation Result
        - Current Evaluation Result.
        * Changes are required, any change should be inserted in DOM the rest should stat unchanged.

## Component updates in action

    - Example code.

## Preventing unnecessary Re-evaluations with React.memo()

    - React looks to the props to the previous state props and check the new props (values), and if any props change it will be the component is re-evaluate, otherwise it is skipped.
    - If the component will run all the time using props would be a good idea to use React.memo().

## Preventing function re-creation with useCallback()

    - Stores a function and tells to React it won't run in every execution.
    - It uses and array of dependecies.

## useCallback() and its Dependencies

    - Clousures.

## A closer look at state and components

    - State Management.
        - State
    - Components
        - Components
    * The interaction is with hooks (useState for example).

## Understanding State Scheduling and Batching

    - Calling a setState functions, the change is scheduled, but React handles it, and maybe React will set a low priority.
        - For us it will be quick, but could take some time.
    - To update a new state, we need to use a function, to use the previous state and update it as we want.
        - It is the safest way to do it, if we depend of the previous state.

## Optimizing with useMemo()

    - useMemo(function, [array]) hook.
