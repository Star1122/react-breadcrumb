import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import projectsReducer from '../projects/reducer';

export const allReducers = {
  projectsReducer,
  routing
};

const appReducer = combineReducers(allReducers);
export default appReducer;
