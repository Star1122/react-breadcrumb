import * as actionTypes from '../actionTypes';

const initialState = {
  lists: [
    {
      id: 1,
      title: 'Project 1',
      keywords: [
        'a',
        'b',
        'c'
      ]
    },
    {
      id: 2,
      title: 'Project 2',
      keywords: [
        'd',
        'e',
        'f',
        'g'
      ]
    },
    {
      id: 3,
      title: 'Project 3',
      keywords: [
        'h',
        'i',
        'j',
        'k',
        'l'
      ]
    },
    {
      id: 4,
      title: 'Project 4',
      keywords: [
        'm',
        'n',
        'o',
        'p',
        'q',
        'r'
      ]
    }
  ],
  current: {
    projectId: 0,
    keyword: ''
  }
};

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.NAVIGATE_TO_PROJECT:
      const current = state.current;
      current.projectId = action.payload;
      return {
        ...state,
        current
      };
    default:
      return state;
  }
}
