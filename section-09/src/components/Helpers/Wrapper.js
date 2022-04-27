/*
    props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component.
    Empty component (empty wrapper).
*/
const Wrapper = (props) => {
    return props.children;
}

export default Wrapper;