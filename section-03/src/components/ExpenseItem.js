//* Every new component starts with uppercase and camel case.
//* A component in React.js is just a function of JavaScript
//* You must have only one root tag for every return.
//* It looks like HTML but it is not.
//* Under the hood this is JavaScript.
import './ExpenseItem.css';

function ExpenseItem() {
    return ( 
        <div className='expense-item'>
            <div>March 28th 2021</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$294.67</div>
            </div>
        </div>
    );
}

export default ExpenseItem;