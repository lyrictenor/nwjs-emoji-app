import { ADD_HISTORY } from '../constants/ActionTypes';

const initialState = [{
  text: ':+1:'
}];

export default function emoji (state = initialState, action = {}) {
  switch (action.type) {
  case ADD_HISTORY:
    return [{
      text: action.text
    }, ...state ];

  default:
    return state;
  }
}
