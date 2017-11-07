import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import configureStore from './common/configureStore';

// Containers
import App from './containers/app/App';

const store = configureStore();

const history = createBrowserHistory();

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" name="Home" component={App} />
        </Switch>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
