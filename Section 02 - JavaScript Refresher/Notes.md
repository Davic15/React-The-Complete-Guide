### Section 02 - JavaScript Refresher

## Module Introduction

    - Optional Course.

## Starting Project

    - Code in CodeSandbox.

## Adding JavaScript to a page and how React projects differ

    - JavaScript can be ran in the browser (client side), in any computer (server side) and in mobile (via embedded websites).
    - JavaScript can be aded between the <script> tag or importing a file inside the <script> tag.
    - The defer attribute makes sure that the script loads when the website is already loaded.
        - Or you can write the <script> tag at the bottom of the <body> before close it.
    - The attribute type="module" allows us to use import in our JavaScript file.

## React Projects use a build process

    - The code I write is not the code that gets executed (like this) in the browser.
    - The code is transformed before it is run in the browswer.
    - React injects <script> tags into the index.html file when the code is compiled.
    - React projects use a build process.
        - React code will not execute in the browser, JSX is not a default JavaScript feature.
        - Code would not be optimized for production (e.g. not minified).
    - Every React project require a build process thar transform our code.

## Import and Export

    - To use import and export functions, we need to add the attribute type="module" in our <script> tag inside the index.html.
    - export default "value", it exports the value, and we can have only one export default.
        - To import we need to create a new variable and no {}.
        - The export default, only works for one value.

## Revisiting Operators

    - Variables are: string, number, boolean, null, undefined and objects.
    - Variables are data containers.
        - Variable identifier (name), value (type).
    - Reusability and Readability.
    - Camel case notation, myVariableOne.
    - Variable name should be descriptive.
    - Define a variable with let (can change) or const (cannot change).

## Revisiting Operators

    - Math operators are: addition, substraction, multiplication and division.
    - With + we can perform addition and concatenate strings.
    - Other operators are ==, ===, !=, !==, etc.

## Revisiting functions and parameters

    - It holds some code that will run in the future and it will be repeated many times.
    - Function example: function myFunction() {}
    - Function example with parameters: function myFunction(myName, mySurname) {}
    - Function example with paraments and default value: function myFunction(myName = 'David', my surName) {}
    - Functions can return values, otherwise it returns undefined.
    - If we return maybe it is a good idea to store the return value in a variable or display it.

## Arrow Functions

    - Really use for annonymous functions (functions without name).
    - Example of arrow function: () => {}

## More on the Arrow Function Syntax

    - If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.
    - If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.
    - If you go for the shorter alternative explained in before and you're trying to return a JavaScript object, it will fail, to fix it, wrap the object and its curly braces with an extra pair of parentheses.

## Revisiting Objects and Classes

    - Objects can store data in the form of key/value pairs, methods.
    - The word "this" allows me to access the variables inside the object.
    - We can create objects using classes (blueprints).

## Arrays and Array Methods like map()

    - Arrays store a list of elements, could be numbers, strings, objects, arrays, etc.
    - Methods: findIndex, map(keep the original array and returns a new array),

## Destructuring

    - Array.
        - const ['fistName', 'lastName'] = ['David', 'Macias']
    - Objects.
        - const {name, age} = {name: 'David', age: 35}

## The Spread Operator

    - It adds the values from the previous arrays and add the new ones.
    - The spread operator looks like ...

## Revisiting Control Structures

    - If condition, if - else condition, if else if else condition.
    - for loop
        - Arrays: for (const hobby of hobbiesArray)

## Manipulating the DOM - Not with React!

    - React will do it for us.
    - Example querySelector, we won't use it.

## Using functions as Values

    - Store functions in variables (normal functions or arrow functions).
    - We can pass functions are arguments to another funtion.

## Defining Functions Inside of Functions

    - Functions can have other functions inside their body.

## Reference vs Primitive Values

    - Reference values, the code access the data in memory.
    - Primitie values, the code access to the value directly.
    - Can define reference values as const and we can add them using methods, but it can't be assign using the = sign.
