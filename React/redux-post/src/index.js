import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import PostsIndex from './components/posts/posts_index';
import PostsNew from './components/posts/posts_new';
import PostsShow from './components/posts/posts_show';
import UserLogin from './components/user/user_login';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/user/login" component={UserLogin} />
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
