import './App.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
// import signUpSchema from './schemas/CreateSchema';



function App() {
  return (
    <div className='header'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/SignUp'>Sign Up</Link>
        <Link to='/Profile'>Profile</Link>
      </nav>
      <h1>Use My Tech</h1>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/Login'>
          <Login />
        </Route>
        <Route exact path='/SignUp'>
          <SignUp />
        </Route>
        <Route exact path='/Profile'>
          <Profile />
        </Route>
        <Route exact path='/'>
          
        </Route>
        <Route exact path='/'>
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
