import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import mapStateToProps from '../../common/app/mapStateToProps';

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Breadcrumbs from '../../components/breadcrumb/Breadcrumb';

// Views
import Dashboard from "../../view/dashboard/Dashboard";
import Projects from '../../view/project/Projects';
import Project from '../../view/project/Project';
import ProjectData from '../../view/project/ProjectData';
import ProjectKeyword from '../../view/project/ProjectKeyword';
import ProjectLists from '../../view/project/ProjectLists';
import ProjectSegments from '../../view/project/ProjectSegments';
import ProjectSettings from '../../view/project/ProjectSettings';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>

        <div className="app-body">
          <Sidebar {...this.props}/>

          <main className="main">
            {(this.props.location.pathname !== '/') && (
              <Breadcrumbs/>
            )}

            <div className="container-fluid">
              <Switch>
                <Route exact path="/" name="Dashboard" component={Dashboard}/>

                <Route exact path="/projects" name="Projects" component={Projects}/>

                <Route exact path="/projects/:projectId" name="Project" component={Project}/>

                <Route exact path="/projects/:projectId/data/keywords"
                       name="Project Keywords" component={ProjectData}/>
                <Route exact path="/projects/:projectId/data/keywords/:keyword"
                       name="Project Keyword" component={ProjectKeyword}/>

                <Route exact path="/projects/:projectId/lists"
                       name="Project Lists" component={ProjectLists}/>
                <Route exact path="/projects/:projectId/segments"
                       name="Project Segments" component={ProjectSegments}/>
                <Route exact path="/projects/:projectId/settings"
                       name="Project Settings" component={ProjectSettings}/>
              </Switch>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
