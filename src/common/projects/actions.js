import * as actionTypes from '../actionTypes';

export function navigateToProject(projectId) {
  return ({
    type: actionTypes.NAVIGATE_TO_PROJECT,
    payload: projectId
  })
}
