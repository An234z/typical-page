import { Fragment, useState, useEffect } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';

import AuthContext from './components/store/auth-context';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem('isLoggedUser');
    if (storedUserLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem('isLoggedUser', 'true');
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedUser');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      loggedIn: isLoggedIn, 
      onLogout: logoutHandler
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <h2 style={{ textAlign: 'center' }}>Welcome back!</h2>}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
