import React, { Component, PropTypes } from 'react';
import emojiCheatSheetData from '../../emoji-cheat-sheet-data.json';
import IconBox from './IconBox.jsx';
import convertImagePath from '../utils/convertImagePath';

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
    const categories = [ 'people', 'nature', 'objects', 'places', 'symbols' ];

    return (
      <section className='main'>
        <ul className='emoji-used-list'>
          {emojis.map(emoji =>
              <li key={emoji.text} {...actions}>{emoji.text}</li>
          )}
        </ul>
        {categories.map(category =>
          <IconBox
            key={category}
            category={category}
            icons={this.buildData(category)}
            {...actions}
            />
          )}
      </section>
    );
  }

  buildData (category) {
    const emojiData = emojiCheatSheetData.map(emoji => {
      emoji.image = convertImagePath(emoji.image);
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
