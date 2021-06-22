import './App.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';



function App() {
  return (
    <div className='header'>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <h1>Use My Tech</h1>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/'>

        </Route>
        <Route exact path='/'>
          
        </Route>
        <Route exact path='/'>
          
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
