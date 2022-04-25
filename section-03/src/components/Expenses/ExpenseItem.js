//* Every new component starts with uppercase and camel case.
//* A component in React.js is just a function of JavaScript
//* You must have only one root tag for every return.
//* It looks like HTML but it is not.
//* Under the hood this is JavaScript.
import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    //* JavaScript (normal) code
    //* Hard coded data
    /*const expenseDate = new Date(2022, 2, 24).toDateString();
    const expenseTitle = 'Car Insurance';
    const expenseAmout = 294.67;*/
    //* We can replace the hard coded data with variables or JavaScript expression inside {}
    //* props, key/value pair
    /*
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();*/

    //* We pass props from parent to child components
    //* All events need a function to be executed

    //* This is a React.js hook and it start with lowecase. Should be call in the component function at the top.
    //* This is a special type of "variable".
    //* It returns an array, first value is the value itself and the second value is the updated function
    //* title points out to props.title.
    //* setTitle is a function to set a new title or a new value.
    const [title, setTitle] = useState(props.title);

    //* React.js will just draw this component when runs for the first time, not if we click it.
    //* To modify the values we need to import useState
    const clickHanlder = () => {
        //* This code doesn't update the title, becuase React.js doesn't work in this way.
        //* title = 'New Value';
        //* To change a value when we call setTitle, it won't get a new value but the function where is call, is executes again. 
        //* When a state change the function should be called again.
        //* If we need to show/change date we need to use states. (only in this component, not other components).
        setTitle('Updated!');
        console.log(title);
    }

    //* This function returns JSX
    return ( 
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>{props.amount}</div>
                </div>
                <button onClick={clickHanlder}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;