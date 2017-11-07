const routes = {
  '/': 'Dashboard',
  '/projects': 'Projects',
  '/projects/:projectId': 'Project',
  '/projects/:projectId/data/keywords': 'Project Keywords',
  '/projects/:projectId/data/keywords/:keyword': 'Project Keyword',
  '/projects/:projectId/lists': 'Project Lists',
  '/projects/:projectId/segments': 'Project Segments',
  '/projects/:projectId/settings': 'Project Settings'
};

export default routes;
