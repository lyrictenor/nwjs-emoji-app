import React, { Component, PropTypes } from 'react';
import IconBox from './IconBox.jsx';
import IconImage from './IconImage.jsx';
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

    return (
      <section className='main'>
        <ul className='emoji-used-list'>
          {emojis.map(emoji =>
            <li className='icon-list' key={emoji.name} >
              <IconImage icon={emoji} actions={actions} />
            </li>
          )}
        </ul>
        {this.renderEmojisWithCategories()}
      </section>
    );
  }

  renderEmojisWithCategories () {
    const { actions } = this.props;
    const categories = [ 'people', 'nature', 'objects', 'places', 'symbols' ];
    const master = new EmojiMaster();

    return (
      <div>
        {categories.map(category =>
          <IconBox
            key={category}
            category={category}
            icons={master.filterByCategory(category)}
            actions={actions}
            />
        )}
      </div>
    );
  }
}
