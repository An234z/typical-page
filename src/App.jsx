import { Fragment } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Login />
      </main>
    </Fragment>
  );
}

export default App;
