import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

/**
 *  What is an Effect or a Side Effect?
 *  Store data in browser storage, Send http requests to backend servers, set & manage Timers.
 *  Can't display data immediatelly, we need to wait
 *  These tasks must happend outside of the normal component evaluation and render cycle - especially since they might
 *  block/delay rendering (e.g. Http requests)
 *  
 *  Handling side effects with the useEffect() Hook
 *  It is call with two arguments, a function that should be execute after every component evaluation if the specified dependencies changed and
 *  dependencies of this effect -  the function only runs if the dependencies changed
 * 
 *  Data fetching is a side effect.
 *  A key stroke is a side effect.
 */

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation =  localStorage.getItem('isLoggedIn');
    if(storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
