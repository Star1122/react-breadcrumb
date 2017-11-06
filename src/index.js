import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import configureStore from './common/configureStore';
import routes from './routes';

const store = configureStore();

const history = createHistory();

// Get the current location.
const location = history.location;

// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state)
});

// Use push, replace, and go to navigate around.
history.push('/projects', { });

// To stop listening, call the function returned from listen().
unlisten();

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes} />
  </Provider>
  , document.getElementById('root')
);
