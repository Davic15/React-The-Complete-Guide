### Section 16 - Working with Forms and user input
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

## Adding Basic validation.
    - With conditions.

## Providing validation feedback.
    - Using states.
    - Changing CSS colors.

## Handling the 'was touched' state.
    - We can add more states and handle touched or untouched inputs.

## React to Lost Focus.
    - We can validate when the input loses focus.
    
## Summary
    - We can use Formik, to deal with forms.
