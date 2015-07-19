import * as types from '../constants/ActionTypes';
import writeClipboard from '../utils/writeClipboard';
import isNwjs from 'is-nwjs';
import { setHistoryData } from '../utils/historyData';

const historyLimit = 30;

export function addHistory (emoji) {
  return (dispatch, getState) => {
    dispatch({
      type: types.ADD_HISTORY,
      emoji
    });
    if (isNwjs) {
      writeClipboard(window.gui, emoji.pattern);
    }
    persistHistory(getState(), emoji);
  };
}

function persistHistory (history, emoji) {
  const rest = history.emoji.filter((needle) => {
    return needle.name !== emoji.name;
  });
  setHistoryData([
    emoji,
    ...rest
  ].slice(0, historyLimit));
}
