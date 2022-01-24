import React, { FC, useEffect, useState } from 'react';
import 'react-app-polyfill/ie11';
import '@fortawesome/fontawesome-free/js/all';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import Welcome from './Welcome';
import Authenticate from './user/containers/Authenticate';
import Transactions from './transactions/containers/Transactions';
import { useSelector } from '../store';
import './App.scss';

const App: FC = () => {
  const [Pathname, setPathname] = useState('');
  const user = useSelector(state => state.user);
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push('/register');
    };
  }, [Pathname]);

  history.listen(({ pathname }) => {
    if (Pathname !== pathname) {
      setPathname(pathname);
    }
  })
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Transactions />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/register">
          <Authenticate />
        </Route>
        <Redirect to="/" />
      </Switch>
      <ToastContainer style={{ fontSize: '16px' }} theme="dark" position="bottom-right" />
    </div>
  );
};

export default App;
