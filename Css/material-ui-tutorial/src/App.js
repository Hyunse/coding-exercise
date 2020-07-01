import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import MovieSearch from './components/MovieSearch';
import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typography variant="h3">React Context Hooks & Material-UI Test</Typography>
      <Link to="/movieSearch">
        <Button color="primary">MovieSearch</Button>
      </Link>
      <Link to="/todoApp">
        <Button>TodoApp</Button>
      </Link>

      <Switch>
        <Route path="/movieSearch" component={MovieSearch}></Route>
        <Route path="/todoApp" component={TodoApp}></Route>
      </Switch>
    </div>
  );
}

export default App;
