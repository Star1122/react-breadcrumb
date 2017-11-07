import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import mapStateToProps from '../../common/app/mapStateToProps';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.clickProject = this.clickProject.bind(this);
  }

  clickProject(id) {
    this.props.actions.navigateToProject(id);
  };

  render() {
    // Get projects cards
    const projectLists = [];
    this.props.projects.lists.forEach((project) => {
      projectLists.push(
        <div key={project.id} className="col-sm-6 col-lg-3">
          <div className="card">
            <div className="card-header">
              {project.title}
            </div>

            <div className="card-body text-center p-3">
              <NavLink className="btn btn-outline-primary"
                 to={'/projects/' + project.id}
                 onClick={() => this.clickProject(project.id)}
              >
                Visit
              </NavLink>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="animated fadeIn">
        <h3 className="page-title">My Project(s)</h3>

        <div className="row">
          {projectLists}
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
