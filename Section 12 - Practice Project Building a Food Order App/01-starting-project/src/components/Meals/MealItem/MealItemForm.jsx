import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import { Input } from '../../UI/Input';

export const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    const input = {
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label='Amount' input={input} ref={amountInputRef} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1 - 5)</p>}
        </form>
    );
};
