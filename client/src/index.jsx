import React from 'react';
import ReactDOM from 'react-dom';
import MouseTracker from '../src/SharedComponents/MouseTracker.jsx';

import App from './App.jsx';
import RootProvider from './state/RootContext.js'

ReactDOM.render(
  <RootProvider>
    <MouseTracker
      render={() => (
        <App  />
      )}
      />
  </RootProvider>,
  document.getElementById('app'));
