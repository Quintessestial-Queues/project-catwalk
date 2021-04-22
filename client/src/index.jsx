import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import RootProvider from './state/RootContext.js'

ReactDOM.render(
  <RootProvider>
    <App />
  </RootProvider>,
  document.getElementById('app'));