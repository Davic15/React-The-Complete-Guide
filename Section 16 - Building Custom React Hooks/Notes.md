### Section 16 - Building Custom React Hooks

## Module Introduction.

    - Only call React hooks in React Functions.
        - React Components Functions.
        - Custom Hooks.
    - Only call React Hooks at the Top Level.
        - Don't call them in nested functions.
        - Don't call them in any block statements.

## What are Custom Hooks?

    - They are just regular functions.
        - Outsource stateful logic into re-usable functions.
        - Unlike 'regular functions', custom hooks can use other React hooks and React State.
        - Re-use logic.

## Creating a custom React hook function

    - For custom hooks we need to name useSomething, the word use+name is the normal way to name a custom hook.
    - React Hooks can be used only in React components.

## Using Custom hooks

    - The state and effect will be tied to the component that calls it.
    - If different components call it, every component will get its own state.

## Configuring Custom Hooks

    - We can create a generic hook to accept diffent situations.
    - Maybe using a flag as a prop.

## Onwards to a more realistic example

    - We can create a custom hook to fetch data (Post, Get, Delete, Put).

## Building a custom Http hook

    - Fetch hook, with parameters.

## Using the custon http hook

    - Generic hook for post and get http requests.

## Adjusting the custom hook logic

    - Some small changes to the useHttp hook.

## Using the custom hook in more components

    - NewTask component to perform post requests.
