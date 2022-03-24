//* Every new component starts with uppercase and camel case.
//* A component in React.js is just a function of JavaScript
//* You must have only one root tag for every return.
//* It looks like HTML but it is not.
//* Under the hood this is JavaScript.
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
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
    return ( 
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;