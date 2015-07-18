import * as types from '../constants/ActionTypes';
import EmojiMaster from '../utils/emojiMaster';
import writeClipboard from '../utils/writeClipboard';
import isNwjs from '../utils/isNwjs';

const master = new EmojiMaster();

export function addHistory (name) {
  return (dispatch) => {
    const emoji = master.findByName(name);
    if (isNwjs) {
      writeClipboard(window.gui, emoji.pattern);
    }
    dispatch({
      type: types.ADD_HISTORY,
      emoji
    });
  };
}
