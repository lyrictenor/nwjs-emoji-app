import { ADD_HISTORY } from '../constants/ActionTypes';
import { getHistoryData } from '../utils/historyData';

const historyLimit = 30;
const thumbsup = {
  name: 'thumbsup',
  pattern: ':thumbsup:',
  image: 'assets/images/emojis/thumbsup.png',
  category: 'people',
  alternatives: []
};

export default function (state = undefined, action = {}) {
  if (typeof state === 'undefined') {
    state = initialState();
  }

  switch (action.type) {
  case ADD_HISTORY:
    const rest = state.filter((needle) => {
      return needle.name !== action.emoji.name;
    });
    return [
      action.emoji,
      ...rest
    ].slice(0, historyLimit);

  default:
    return state;
  }
}

function initialState () {
  const savedData = getHistoryData();
  return (savedData.length > 0) ? savedData : [thumbsup];
}
