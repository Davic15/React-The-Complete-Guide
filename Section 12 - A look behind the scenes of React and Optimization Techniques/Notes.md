### Section 12 - A look behind the scenes of React and Optimization Techniques

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
        
