import React, { Component, PropTypes } from 'react';
import emojiCheatSheetData from '../../emoji-cheat-sheet-data.json';
import path from 'path';

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
    const emojiData = emojiCheatSheetData.map(emoji => {
      let file = emoji.image.split('/').pop();
      let filePath = path.join('assets', 'images', 'emojis', file);
      emoji.image = filePath;
      return emoji;
    });

    return (
      <section className='main'>
        <ul className='emoji-used-list'>
          {emojis.map(emoji =>
            <li key={emoji.text} {...actions}>{emoji.text}</li>
          )}
        </ul>
      </section>
    );
  }
}
