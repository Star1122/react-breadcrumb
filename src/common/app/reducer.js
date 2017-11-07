import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import projects from '../projects/reducer';

export const allReducers = {
  projects,
  routing
};

const appReducer = combineReducers(allReducers);
export default appReducer;
