import React from 'react';
import { Switch, Route } from 'react-router';

import App from './containers/app/App';
import Projects from './containers/project/Projects';
import Project from './containers/project/Project';
import ProjectData from './containers/project/ProjectData';
import ProjectKeywords from './containers/project/ProjectKeywords';
import ProjectSegments from './containers/project/ProjectSegments';
import ProjectLists from './containers/project/ProjectLists';
import ProjectSettings from './containers/project/ProjectSettings';

const routes = (
  <Switch>
    <Route path="/" component={App} />

    <Route path="/projects" component={Projects} />

    <Route path="/projects/:projectId" component={Project} />

    <Route path="/projects/:projectId/data" component={ProjectData} />
    <Route path="/projects/:projectId/keywords" component={ProjectKeywords} />
    <Route path="/projects/:projectId/segments" component={ProjectSegments} />
    <Route path="/projects/:projectId/lists" component={ProjectLists} />
    <Route path="/projects/:projectId/settings" component={ProjectSettings} />
  </Switch>
);

export default routes;
