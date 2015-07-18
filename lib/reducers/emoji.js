import { ADD_HISTORY } from '../constants/ActionTypes';

const historyLimit = 30;

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
  return [
    {
      name: 'thumbsup',
      pattern: ':thumbsup:',
      image: 'assets/images/emojis/thumbsup.png',
      category: 'people',
      alternatives: []
    }
  ];
}
