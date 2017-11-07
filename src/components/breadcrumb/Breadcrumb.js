// import React from 'react';
// import { Route, Link } from 'react-router-dom';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import routes from '../../routes';
//
// const findRouteName = url => routes[url];
//
// const getPaths = (pathname) => {
//   const paths = ['/'];
//
//   if (pathname === '/') return paths;
//
//   pathname.split('/').reduce((prev, curr, index) => {
//     const currPath = `${prev}/${curr}`;
//     paths.push(currPath);
//     return currPath;
//   });
//   console.log(paths);
//   return paths;
// };
//
// const BreadcrumbsItem = ({ ...rest, match }) => {
//   const routeName = findRouteName(match.url);
//   if (routeName) {
//     return (
//       match.isExact ?
//         (
//           <BreadcrumbItem active>{routeName}</BreadcrumbItem>
//         ) :
//         (
//           <BreadcrumbItem>
//             <Link to={match.url || ''}>
//               {routeName}
//             </Link>
//           </BreadcrumbItem>
//         )
//     );
//   }
//   return null;
// };
//
// const Breadcrumbs = ({ ...rest, location : { pathname }, match }) => {
//   const paths = getPaths(pathname);
//   const i = 0;
//   const items = paths.map((path, i) => <Route key={i++} path={path} component={BreadcrumbsItem} />);
//   return (
//     <Breadcrumb>
//       {items}
//     </Breadcrumb>
//   );
// };
//
// export default props => (
//   <div>
//     <Route path="/:path" component={Breadcrumbs} {...props} />
//   </div>
// );
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withBreadcrumbs } from 'react-router-breadcrumbs-hoc';

const ProjectBreadcrumb = ({ match }) => {
  console.log(match);
  return (
    <span>{match.params.projectId}</span> // use match param userId to fetch/display user name
  );
};


const routes = [
  { path: 'projects', breadcrumb: 'Projects' },
  { path: 'projects/:projectId', breadcrumb: ProjectBreadcrumb},
];

const Breadcrumbs = ({ breadcrumbs }) => {
  console.log(breadcrumbs);
  return (
    <div>
      {breadcrumbs.map(({ breadcrumb, path, match }) => (
        <span key={path}>
        <NavLink to={match.url}>
          {breadcrumb}
        </NavLink>
        <span>/</span>
      </span>
      ))}
    </div>
  );
};

export default withBreadcrumbs(routes)(Breadcrumbs);
