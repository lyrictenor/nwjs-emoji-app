import * as types from '../constants/ActionTypes';
import EmojiMaster from '../utils/emojiMaster';

export function addHistory (name) {
  const master = new EmojiMaster();
  const emoji = master.findByName(name);
  return {
    type: types.ADD_HISTORY,
    ...emoji
  };
}
