### Section 09 - Diving Deeper Working with Fragments Portals and Refs
## Module Introduction
    - Fragments, Portals and Ref.
    - JSX Limitations and Fragments.
    - Working with Refs.

## JSX Limitations and Workarounds.
    - JSX code that is used by React.
    - We can't return more than one 'root' JSX element (you also can't sotre more than one 'root' JSX element in a variable).
        - The solution is to wrap with a div or any other element.
    - A new Problem adding more divs, a div Soup.
    - In bigger apps, we will have tons of unnecessary <div> or other elements which add no semantic meaning or structure to the page but are only there because of React's JSX requirement.

## Creating a Wrapper Component.
    - We can wrap elements with a wrapper.
    - It is just a helper.

## React Fragments.
    - <React.Fragment></React.Fragment>
    - <></>
    - It is an empty wrapper, it does not render any real HTML element to the DOM.

## React Portals
    - From a clean HTML structure perspective, having a nested modal isn't ideal. It is an overaly to the entire page after all.
    - Or using a div as a clickable button.
    - For Modal or overlay content we can use portals.
    - We can add a container in the index.html and we can target that to use modals, overlays, etc.

## Working with "ref"s
    - We can set a connection with the HTML and JavaScript code.
    - It is a hook, useRef();

## Controlled vs Uncontrolled components.
    - If we use ref it is just and uncontrolled component, because we dont control the state of the component.
    - 