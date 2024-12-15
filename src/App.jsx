import { Fragment, useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

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
      <MainHeader />
      <main>
        <Login onLogin={loginHandler} />
      </main>
    </Fragment>
  );
}

export default App;
