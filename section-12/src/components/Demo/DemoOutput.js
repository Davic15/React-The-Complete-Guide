import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    console.log('DemoOutput running');
    return(
        <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
    );
}

//* Function components, it doesn't work with class based components
//* If props don't change, the component is not re-render
export default React.memo(DemoOutput);