import React, { Component, PropTypes } from 'react';
import IconBox from './IconBox.jsx';
import IconList from './IconList.jsx';
import EmojiMaster from '../utils/emojiMaster';

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
    const master = new EmojiMaster();

    return (
      <section className='main'>
        <ul className='emoji-used-list'>
          {emojis.map(emoji =>
            <IconList key={emoji.name} icon={emoji} {...actions} />
          )}
        </ul>
        {categories.map(category =>
          <IconBox
            key={category}
            category={category}
            icons={master.filterByCategory(category)}
            {...actions}
            />
          )}
      </section>
    );
  }
}
