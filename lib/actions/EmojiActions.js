import * as types from '../constants/ActionTypes';
import EmojiMaster from '../utils/emojiMaster';
import writeClipboard from '../utils/writeClipboard';
import isNwjs from '../utils/isNwjs';

export function addHistory (name) {
  const master = new EmojiMaster();
  const emoji = master.findByName(name);
  if (isNwjs) {
    writeClipboard(window.gui, emoji.pattern);
  }
  return {
    type: types.ADD_HISTORY,
    emoji
  };
}
