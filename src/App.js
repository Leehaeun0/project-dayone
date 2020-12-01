import React, { useContext } from 'react';
import './App.css';
import Login from './Page/Login';
import WrapperPage from './Page/WrapperPage';
import { LoginContext } from './Context/MainContext';

const App = () => {
  const context = useContext(LoginContext);
  const { loginState } = context;
  const { isLoggedIn } = loginState;

  return <>{isLoggedIn ? <WrapperPage /> : <Login />}</>;
};

export default App;
