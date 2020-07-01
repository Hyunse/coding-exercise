import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import MovieSearch from './components/MovieSearch';
import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/MovieSearch">
        <Button color="primary">MovieSearch</Button>
      </Link>
      <Link to="/todo">
        <Button>Todo</Button>
      </Link>

      <Switch>
        <Route path="/MovieSearch" component={MovieSearch}></Route>
        <Route path="/todo" component={Todo} />
      </Switch>
    </div>
  );
}

export default App;
