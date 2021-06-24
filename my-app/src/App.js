import './App.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
// import signUpSchema from './schemas/CreateSchema';
import { useLocation } from 'react-router-dom';


function App() {

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");


  return (
    <div className='header'>
      <nav>
        <ul>
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <Link to='/'>Home</Link>
          </li>
          <li className={splitLocation[1] === "Login" ? "active" : ""}>
            <Link to='/Login'>Login</Link>
          </li>
          <li className={splitLocation[1] === "SignUp" ? "active" : ""}>
            <Link to='/SignUp'>Sign Up</Link>
          </li>
          <li className={splitLocation[1] === "Profile" ? "active" : ""}>
            <Link to='/Profile'>Profile</Link>
          </li>
        </ul>
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
