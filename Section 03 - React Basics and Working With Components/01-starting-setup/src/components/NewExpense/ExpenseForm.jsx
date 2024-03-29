import React, { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [entedDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    // const inputChangeHandler = (identifier, value) => {
    //     if (identifier === 'title') {
    //         setEnteredTitle(value);
    //     } else if (identifier === 'date') {
    //         setEnteredDate(value);
    //     } else {
    //         setEnteredAmount(value);
    //     }
    // };

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value };
        // });
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // });
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(entedDate),
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2023-1-1'
                        max='2023-12-31'
                        onChange={dateChangeHandler}
                        value={entedDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};
