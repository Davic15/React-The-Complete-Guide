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

## Using one state Instead (and what's better).
    - We can have many states of our form.
    - We can do it in one state instead of three states, we can use and object as initial value and work with it.

## Updating state that depends on the previous state.
    - We can use an arrow function to update the new value keeping the previous value.

## Adding two-way binding.
    - With the attribute value in the HTML tag.

## Child-to-Parent component communication (bottom-up).
    - How to pass data from a child component to the Parent component.
    - We can use a function from the parent component to the child component, and we can use it in the child component that function to update the parent component.

## Lifting the state up.
    - App
        - Expenses (Data/State is needed here).
        - New Expense (Data/State is generated here).
    - Lifting the state up (moving data from child to parent component).