import React from 'react';

export const DemoOutput = (props) => {
    console.log('DemoOutput Running');
    return <p>{props.show ? 'This is new!' : ''}</p>;
};
