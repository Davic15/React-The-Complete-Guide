### Section 03 - React Basics & Working With Components

## Module Introduction

    - React Core Syntax and JSX.
    - Working with Components.
    - Working with Data.

## What are components?, and why is React all about them?

    - React makes building complex, interactice and reactive user interfaces simpler.
    - React is all about "Components".
    - Components are just a combination of HTML, CSS and JavaScript, and it can be reusable in different parts of our application.
    - Reusability (Don't repeat yourself).
    - Separation of Concerns (Don't do too many things in one and the same place (function)).
    - Split big chunks of code into multiple smaller functions.

## React code is written in a "Declarative Way"!

    - Re-usable and reactive components consisting of HTML and JavaScript (CSS too).
    - Declarative approach.
    - Define the desired target state(s) and let React figure out the actual JavaScript DOM instructions.
    - We build our own custom HTML element.

## Creating a new React Project

    - We need NodeJS.

## Analyzing a standard React Project

    - The base is JavaScript.
    - Using Vite because npx create-react-app bothers with some babel dependencies.

## Introducing JSX

    - JSX = JavaScript XML
    - The HTML and JS in every component, have a transformation behind the scenes.
    - JSX is not supported by the browser.

## How React Works

    - Build our own, custom HTML elements.
    - Divide our app in small components.
    - Add every component when is needed for us.
    - Imperative code is what normal (vanilla) JavaScript does.

## Building a First Custom Component

    - You Build a component tree.
        - App
            - Header
                - Navigation Bar
            - Task
                - Section.
    - It start with Uppercase character.
    - A component in React is a JavaScript function.

## Writing more complex JSX code

    - In React we should have one root statement when we create and return a component.

## Adding Basic CSS Styling

    - A CSS file can be added for every component, and it should be imported.
    - We need to write className instead of class.

## Outputting Dynamic Data and working with expressions in JSX

    - Most of the time the data will change, and we don't have static data.
    - Displaying values from variables.

## Passing data via 'props'

    - We can use the same component to display different data.
    - Props are the "attributes" of your "custom HTML elements" (Components).
    - In our App component we have a variable and we have a custom component, where the value is needed, we can use props (properties).
    - From parent components to child components.

## Alternative Way of Passing and Receiving / Handling "props"

    - We can send the array with the information on it.
        - Example: <ExpenseItem expense={expenses[0]} />
    - Other way is using destructuring.
        - Example: ({ name, surname, age })

## Adding 'normal' JavaScript logic to components

    - Added date to be easy to read.

## Splitting components into multiple Components

    - Some components can be split more and more.
    - There is not a specific rule how to split components.

## The concept of "Composition" (children props)

    - Composition helps us to build User interfaces with small components.
    - We can't use custom components are wrapper of other components, for normal HTML and JS it is fine.
    - To act like a wrapper we need to use props.children in our wrapper.
    - Custom components don't support className.
    - In the wrapper we need to add the class of our wrapper + props.className.

## A First summary

    - Review about written above.

## A closer look at JSX

    - JSX is the way to write code in React.
    - It is a mix of JavaScript, HTML and CSS.
    - With out JSX we should write more cryptic code, hard to read.
    - We need to create a wrapper and inside the wrapper more tags or components.

## Organizing Component Files

    - We need organize the components in sub folders.
    - General UI components.
    - Feature specific components.

## An Alternative Function Syntax

    - Arrow functions.
