import { ADD_EMOJI } from '../constants/ActionTypes';

const initialState = [{
  text: ':+1:'
}];

export default function emojis (state = initialState, action = {}) {
  switch (action.type) {
  case ADD_EMOJI:
    return [{
      text: action.text
    }, ...state ];

  default:
    return state;
  }
}
