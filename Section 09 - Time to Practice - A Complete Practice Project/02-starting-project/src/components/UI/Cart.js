import React from 'react';
import classes from './Cart.module.css';

export const Cart = (props) => {
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
};
