import { ADD_HISTORY } from '../constants/ActionTypes';

const initialState = [
  {
    name: '+1',
    pattern: ':+1:',
    image: 'assets/images/emojis/plus1.png',
    category: 'people',
    alternatives: []
  }
];

export default function (state = initialState, action = {}) {
  switch (action.type) {
  case ADD_HISTORY:
    const rest = state.filter((needle) => {
      return needle.name !== action.emoji.name;
    });
    return [
      action.emoji,
      ...rest
    ];

  default:
    return state;
  }
}
