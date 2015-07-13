import { ADD_HISTORY } from '../constants/ActionTypes';

const initialState = [
  {
    name: 'thumbsup',
    pattern: ':thumbsup:',
    image: 'assets/images/emojis/thumbsup.png',
    category: 'people',
    alternatives: []
  }
];
const historyLimit = 30;

export default function (state = initialState, action = {}) {
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
