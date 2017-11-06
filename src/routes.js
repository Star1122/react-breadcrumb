import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './containers/app/App';
import Project from './containers/project/Project';

function asyncComponent(component) {
  return process.env.IS_BROWSER && process.env.NODE_ENV === 'production'
    ? component
    : (_r, cb) => cb(null, component);
}

export default function createRoutes(getState) {
  return (
    <Route path="/">
      <IndexRoute getComponent={asyncComponent(App)} />

      <Route getComponent={asyncComponent(Project)} path="/projects" />

      <Route path="/projects/:projectId">
        <IndexRoute getComponent={asyncComponent(Project)} />
      </Route>
    </Route>
  );
}
