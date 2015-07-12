import * as types from '../constants/ActionTypes';

export function addEmoji (text) {
  return {
    type: types.ADD_HISTORY,
    text
  };
}
