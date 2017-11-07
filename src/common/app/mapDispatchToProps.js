import {Map} from 'immutable';
import {bindActionCreators} from 'redux';
import {routerActions} from 'react-router-redux';

import * as projectActions from '../projects/actions';

const actions = [
  projectActions,
  routerActions
];

export default function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}
