import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import mapStateToProps from '../../common/app/mapStateToProps';

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

// Views
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
    console.log(this.props);
    return (
      <div className="app">
        <Header/>

        <div className="app-body">
          <Sidebar {...this.props} />

          <main className="main">
            <Breadcrumb/>

            <div className="container-fluid">
              <Switch>
                <Route path="/projects" name="Projects Page" component={Projects}/>

                <Route path="/projects/:projectId" name="Project Page" component={Project}/>

                <Route path="/projects/:projectId/data/keywords"
                       name="Project Keywords Page" component={ProjectData}/>
                <Route path="/projects/:projectId/data/keywords/:keyword"
                       name="Project Keyword Page" component={ProjectKeyword}/>

                <Route path="/projects/:projectId/lists"
                       name="Project Lists Page" component={ProjectLists}/>
                <Route path="/projects/:projectId/segments"
                       name="Project Segments Page" component={ProjectSegments}/>
                <Route path="/projects/:projectId/settings"
                       name="Project Settings Page" component={ProjectSettings}/>

                <Redirect from="/" to="/projects"/>
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
