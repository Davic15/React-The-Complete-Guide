import React, { useState } from "react";
import './ExpenseForm.css';

//* three inputs
const ExpenseForm = (props) => {
    //* Many states
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //* We can use an object to work with all states of the form tag
    /*const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });*/

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
        //* We can save the state of the other key/value pairs.
        /*setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });*/

        //* Other way to do it (best way), depending of the previous approach
        /*setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });*/
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        /*setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });*/
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /*setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });*/
    }
    //* If a button is clicked inside a form it acts like submit

    const submitHandler = (event) => {
        //* Prevent the request been send.
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date (enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;