### Section 26 - Testing React Apps (Unit Tests).

## Understanding Different Kinds of Tests.
    - Unit Tests
        - Test the individual building blocks (function, componets) in isolation.
        - Projects typically contain dozen or hundreds of unit tests.
        - The most common / important kind of test.
    
    - Integration Tests.
        - Test the combination of multiple building blocks.
        - Projects typically contain a couple of integration tests.
        - Also important, but focus on unit tests in most cases.
    
    - End-to-End (e2e) Tests
        - Test complete scenarios in your app as the user would experience them.
        - Project typically contain only a few e2e tests.
        - Important but also be done manually (partially).

## What to test and how to test.
    - What?
        - Test the different building blocks.
        - Unit Tests: the smallest building blocks that make up your app.
    
    -How? 
        - Test success and error cases, algo test rare (but possible) results.

## Understanding the Technical Setup & Involved Tools.
    - We need a tool for running our tests and asserting the result (Jest).
    - We need a tool for "simulating" (rendering) our React app / component (React Testing Library).
    - Both tools are alrady set up for you when using create-react-app.

## Running a First Test.
    - It contains a function with two arguments.
        - First argument is a description of the test.
        - Second argument is a function, with the testing code.
    
## Writting our first test.
    - The three "A"s
        - Arrange: Set up the test data, test conditions and test environment.
        - Act: Rung logic that should be tested. (e.g. execute funtion).
        - Asset: Compare execution results with expected results.

## Grouping tests together with test suites.
    - We can group many test in a single suite with "describe".
    - It takes two arguments, the name and a function with all test inside.

## Testing user interacion and State.

## Texting Connected Components.
    - It renders all component in our component tree.
    - It is called an integration test.

## 