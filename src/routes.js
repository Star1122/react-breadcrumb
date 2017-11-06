import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/app/App';
import Projects from './containers/project/Projects';
import Project from './containers/project/Project';
import ProjectData from './containers/project/ProjectData';
import ProjectKeywords from './containers/project/ProjectKeywords';
import ProjectSegments from './containers/project/ProjectSegments';
import ProjectLists from './containers/project/ProjectLists';
import ProjectSettings from './containers/project/ProjectSettings';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Projects} />

    <Route path="/projects/:projectId">
      <IndexRoute component={Project} />

      <Route path="data" component={ProjectData}>
        <IndexRoute component={ProjectData} />

        <Route
          path="keywords"
          component={ProjectKeywords}
        />
      </Route>

      <Route
        component={ProjectSegments}
        path="/segments"
      />

      <Route
        component={ProjectLists}
        path="/lists"
      />

      <Route
        component={ProjectSettings}
        path="/settings"
      />
    </Route>
  </Route>
);

export default routes;
