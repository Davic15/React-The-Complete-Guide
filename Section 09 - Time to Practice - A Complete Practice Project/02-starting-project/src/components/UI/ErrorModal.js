import React from 'react';
import { Cart } from './Cart';
import { Button } from './Button';
import classes from './ErrorModal.module.css';

export const ErrorModal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
            <Cart className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Cart>
        </div>
    );
};
