import './Card.css';

//* This component acts like a shell for other components
//* This is a wrapper for other custom components.
//* It doesn't work, for that reason we need to write props.children in this custom component.
//* props.children allows us to write custom component inside this wrapper that is a custom component too.
//* props.className uses the css classes from a CSS file.
const Card = (props) => {
    const classes = 'card ' + props.className
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;