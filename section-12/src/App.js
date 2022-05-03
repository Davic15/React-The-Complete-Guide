import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  //* useCallback allows to save a function and don't recreated in every execution
  //* For every state change the component is re-render
  const [showParagraph, setShowParagraph] = useState(false);
  console.log('App Running');
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
