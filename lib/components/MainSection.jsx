import React, { Component, PropTypes } from 'react';
import emojiCheatSheetData from '../../emoji-cheat-sheet-data.json';
import path from 'path';
import IconBox from './IconBox.jsx';

export default class MainSection extends Component {
  static propTypes = {
    emojis: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { emojis, actions } = this.props;
    const peopleEmojiData = this.buildData('people');

    return (
      <section className='main'>
        <ul className='emoji-used-list'>
          {emojis.map(emoji =>
              <li key={emoji.text} {...actions}>{emoji.text}</li>
          )}
        </ul>
        <IconBox
          key='people'
          category='people'
          icons={peopleEmojiData}
          {...actions}
          />
      </section>
    );
  }

  buildData (category) {
    const emojiData = emojiCheatSheetData.map(emoji => {
      let file = emoji.image.split('/').pop();
      emoji.image = path.join('assets', 'images', 'emojis', file);
      return emoji;
    });
    if (!category) {
      return emojiData;
    }
    return emojiData.filter((emoji) => {
      return emoji.category === category;
    });
  }
}
