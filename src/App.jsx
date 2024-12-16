import { Fragment, useState, useEffect } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Kontrolli, kas kasutaja on juba sisse logitud
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
    <Fragment>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <h2 style={{ textAlign: 'center' }}>Welcome back!</h2>}
      </main>
    </Fragment>
  );
}

export default App;
