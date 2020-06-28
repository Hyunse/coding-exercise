import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/home"><Button color="primary">Home</Button></Link>
      <Link to="/about"><Button>About</Button></Link>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
