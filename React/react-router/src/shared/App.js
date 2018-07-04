import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';
import NavLinkMenu from 'components/NavLinkMenu';

class App extends Component {
  render() {
    return (
      <div>
        Link
        <Menu />
        Nav Link
        <NavLinkMenu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
};

export default App;