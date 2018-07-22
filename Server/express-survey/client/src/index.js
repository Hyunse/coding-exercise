import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import SurveyNew from './components/SurveyNew';

// Init Store
const store = createStore(reducers, {}, applyMiddleware());

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App>
        <Route path="/" exact component={Landing} />
        <Route path="/surveys" exact component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </App>
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
);
