import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    const {projectId} = this.props.projects.current;

    let curProject;
    this.props.projects.lists.forEach(function (project) {
      if (project.id === projectId) {
        curProject = project;
      }
    });

    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          {(projectId && curProject)
            ? (
              <ul className="nav">
                <li className="nav-title">
                  Project Title
                </li>
                <li className="nav-item">
                  <NavLink to={'/projects/' + this.props.projects.current.projectId} className="nav-link"
                           activeClassName="active">
                    <i className="fa fa-tachometer" aria-hidden="true"/> Overview
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/projects/' + this.props.projects.current.projectId + '/data/keywords'}
                           className="nav-link" activeClassName="active">
                    <i className="fa fa-folder-open-o" aria-hidden="true"/> Data
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/projects/' + this.props.projects.current.projectId + '/segments'} className="nav-link"
                           activeClassName="active">
                    <i className="fa fa-pie-chart" aria-hidden="true"/> Segments
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/projects/' + this.props.projects.current.projectId + '/lists'} className="nav-link"
                           activeClassName="active">
                    <i className="fa fa-list" aria-hidden="true"/> Lists
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/projects/' + this.props.projects.current.projectId + '/settings'} className="nav-link"
                           activeClassName="active">
                    <i className="fa fa-cog" aria-hidden="true"/> Settings
                  </NavLink>
                </li>
              </ul>
            )
            : ''
          }

          <ul className="nav">
            <li className="nav-title">
              Global
            </li>
            <li className="nav-item">
              <NavLink to={'/projects'} className="nav-link" activeClassName="active">
                <i className="fa fa-folder-o" aria-hidden="true"/> Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'#'} className="nav-link" activeClassName="active">
                <i className="fa fa-sign-out" aria-hidden="true"/> Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
