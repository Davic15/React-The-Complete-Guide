### Section 04 - React State and Working with Events
## Module Introduction.
    - Making App interactive and Reactive.

## Listen to Events and Working with Event Handlers.
    - We have access to all native JavaScript events in React.
    - Example: Clik, Blur, etc.
    - In React we have onClick, onBlur, etc.
    - For click event we can create a function on the fly or write it outside the return.
    - By convention if the function triggers an Event the name should end with Handler, example: clickHandler().

## How Component Functions are executed.
    - To change a variable's value we can't just change the value.
    - A component is a regular function and it returns JSX.
    - React executes the code till the last return, and it never repeats again.
    - After that it never runs again, we need to tell React something change in a component and that component should be re evaluated (and re draw).

## Work with 'state'.
    - To tell React to run again a component, we need to use a function (hook), in this case useState.
    - All hooks start with use word, and it should be use inside React components only.
    - useState needs a initial value.
    - With array destructurin we need the variable and the function to update the variable.

## A closer look at the 'useState' hook.
    - States are independent, even if we create many components.
    - Use const with useState works well because, we are not assigning a new value with equal.

## Adding Form Inputs