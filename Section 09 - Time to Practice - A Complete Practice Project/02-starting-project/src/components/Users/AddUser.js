import React, { useState } from 'react';
import { Cart } from '../UI/Cart';
import { Button } from '../UI/Button';
import classes from './AddUser.module.css';
import { ErrorModal } from '../UI/ErrorModal';

export const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid Input',
                message:
                    'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Cart className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        onChange={usernameChangeHandler}
                        value={enteredUsername}
                    />

                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='number'
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Cart>
        </div>
    );
};
