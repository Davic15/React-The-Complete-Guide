import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

/**
 *  What are custom hooks?
 *  They are regular function which can contain stateful logic re-usable functions.
 *  Unlike "regular functions", custom hooks can use other React hooks and React state.
 */

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
