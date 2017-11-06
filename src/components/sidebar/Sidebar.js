import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-title">
              Project Title
            </li>
            <li className="nav-item">
              <NavLink to={'/projects'} className="nav-link" activeClassName="active">
                <i className="fa fa-tachometer" aria-hidden="true"/> Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/projects'} className="nav-link" activeClassName="active">
                <i className="fa fa-folder-open-o" aria-hidden="true"/> Data
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/projects'} className="nav-link" activeClassName="active">
                <i className="fa fa-pie-chart" aria-hidden="true"/> Segments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/projects'} className="nav-link" activeClassName="active">
                <i className="fa fa-list" aria-hidden="true"/> Lists
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/projects'} className="nav-link" activeClassName="active">
                <i className="fa fa-cog" aria-hidden="true"/> Settings
              </NavLink>
            </li>

            <li className="nav-title">
              Global
            </li>
            <li className="nav-item">
              <NavLink to={'/projects'} className="nav-link" activeClassName="active">
                <i className="fa fa-folder-o" aria-hidden="true"/> Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/projects'} className="nav-link" activeClassName="active">
                <i class="fa fa-sign-out" aria-hidden="true"/> Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
