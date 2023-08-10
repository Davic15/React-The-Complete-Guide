import React from 'react';
import { Cart } from '../UI/Cart';
import classes from './UsersList.module.css';

export const UsersList = (props) => {
    return (
        <Cart className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Cart>
    );
};
