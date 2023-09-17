### Section 17 - Working with Forms and User Input

## Module introduction.

    - What is complex about forms.
    - Handling inputs and froms with React.
    - Simplifications

## What's so complex about forms?.

    - Forms and inputs can assume different states.
        - One or more inputs are invalid.
            - Output input specific error messages and highlight problematic inputs.
            - Ensure form can't be submitted.
        - All inputs are valid.
            - Allow form to be submitted.
    - When to validate?.
        - When form is submitted.
            - Allow the user to enter a valid value before warning him/her.
            - Avoid unnecessary warnings but maybe present feedback too late.
        - When an input is losing focus.
            - Allows the user to enter a valid value before warning him/her.
            - Very useful for untouched forms.
        - On every keystroke.
            - Warns user before he/she had a chance of entering valid values.
            - If applied only on invalid inputs, has the potential of providing more direct feedback.

## Dealing with form submission and Getting user input values.

    - Not manipulate the DOM directly, it is better to use states.
        - Two ways to do it.
            - useState.
            - useRef.
        - But the best approach is useSate.
        - With useRef we manipulate the DOM directly and it is not good, we need to let React to do it.
    - Prevent default behavior of the browser when submit.

## Adding Basic validation.

    - With conditions.
        - Like check if there is empty or not the input field.

## Providing validation feedback.

    - Using states.
    - Changing CSS colors.

## Handling the 'was touched' state.

    - We can add more states and handle touched or untouched inputs.

## React to Lost Focus.

    - We can validate when the input loses focus.

## Refactoring and Deriving State.

    - Change the code to make it clean.
    - Change some stuffs to improve user experience.

## Managing the overall From Validity.

    - Validate inputs and validate form too.
    - Also enable/disable buttons to submit informaiton.

## Adding a custom input hook.

    - When the code is too repetitive we can create a function helper, or in this case a custom hooks to handle inputs.

## Re-using the custom hook.

    - The same but now with the email input.

## Applying our hook and knowledge to a new form.

    - In a new form we can add some validations.

## Summary.

    - We can use Formik, to deal with forms.

## Bonus: Using useReducer()

    - Change the useState for useReducer.
