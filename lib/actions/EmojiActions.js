import * as types from '../constants/ActionTypes';
import writeClipboard from '../utils/writeClipboard';
import isNwjs from '../utils/isNwjs';
import { getHistoryData, setHistoryData } from '../utils/historyData';

export function addHistory (emoji) {
  return (dispatch) => {
    dispatch({
      type: types.ADD_HISTORY,
      emoji
    });
    if (isNwjs) {
      writeClipboard(window.gui, emoji.pattern);
    }
  };
}
