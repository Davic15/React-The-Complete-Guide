### Section 06 - Styling React Components.
## Module introduction.
    - Make your apps look good.
    - Conditional and dynamic styles.
    - Styled components (third party library).
    - CSS Modules.

## Setting Dynamic InLine Styles.
    - The styles for each component, have a global scope.
    - Every component can be access to that style.

## Introducing Styled Components.
    - If we have want just some styles for a specific component we can have two approaches.
        - Styled-component
            - Third-party library called styled-components.
            - Styles are built in a component and attach to that component.
            - It has methods for every HTML tag.
            - The classes are unique, and won't affect other components.
        - Using CSS Modules
            - We need to import like this:
                - import styles from 'css.module.css'
            - The CSS file should be like this:
                - name.module.css
            - To use it:
                - {styles.cssClass}
            - It takes the class names and make them unique.
            - The scope is local only for that component.
            