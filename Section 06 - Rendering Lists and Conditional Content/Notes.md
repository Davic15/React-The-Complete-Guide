### Section 06 - Rendering Lists and Conditional Content

## Module Introduction

    - Outputting dynamic lists of content.
    - Rendering content under certain conditions.

## Rendering Lists of data

    - Using map method to render a list of items.

## Using Stateful List

    - We should states to update our website.
    - useState should be used, and when we use setNewState we can do it with an arrow function.
        - Example:
        - setExpenses(prevExpenses => {
            return[expense, ...prevExpenses];
        })
        - This is the way to update our array with a previous snapshot of the array.

## Understanding "Keys"

    - It is a React feature, when it renders a list of components.
    - The attribute key should be added.

## Outputting Conditional Content

    - Some options are available like &&, ||, and ternary conditions.

## Checking project in Section 3 folder
