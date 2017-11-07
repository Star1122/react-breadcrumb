import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {connect} from 'react-redux';

import mapStateToProps from '../../common/app/mapStateToProps';
import routes from '../../routes';

const findRouteName = url => routes[url];

const getPaths = (pathname) => {
  const paths = [];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });

  return paths;
};

let BreadcrumbsItem = ({ ...rest, match }) => {
  let path = match.path;
  let paths = path.split('/');
  let url = '';
  paths.forEach((pt, i) => {
    // Url conversion for projectId and keyword
    if (i > 0 && paths[i - 1] === 'projects') {
      url += '/:projectId';
    } else {
      url += '/' + pt;
    }
  });
  url = url.substr(1);

  let routeName = findRouteName(url);
  if (routeName === 'Project') {
    // Get current project title
    const {lists, current} = rest.projects;
    lists.forEach((project) => {
      if (project.id === current.projectId) {
        routeName = project.title;
      }
    });
  }

  if (routeName) {
    return (
      match.isExact ?
        (
          <BreadcrumbItem active>{routeName}</BreadcrumbItem>
        ) :
        (
          <BreadcrumbItem>
            <Link to={match.url || ''}>
              {routeName}
            </Link>
          </BreadcrumbItem>
        )
    );
  }

  return null;
};

BreadcrumbsItem.propTypes = {
  projects: PropTypes.object.isRequired
};

BreadcrumbsItem = connect(mapStateToProps)(BreadcrumbsItem);

const Breadcrumbs = ({ ...rest, location : { pathname }, match }) => {
  const paths = getPaths(pathname);
  const items = paths.map((path, i) => <Route key={i} path={path} component={BreadcrumbsItem} />);
  return (
    <Breadcrumb>
      {items}
    </Breadcrumb>
  );
};

export default props => (
  <div>
    <Route path="/:path" component={Breadcrumbs} {...props} />
  </div>
);
