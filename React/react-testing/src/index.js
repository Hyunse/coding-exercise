import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';

import App from 'components/App';

ReactDom.render(
  <Root>
    <App />
  </Root>
  , document.querySelector('#root'));
