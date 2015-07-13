import React, { Component, PropTypes } from 'react';
import IconBox from './IconBox.jsx';
import EmojiMaster from '../utils/emojiMaster';

export default class MainSection extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { emojis, actions } = this.props;

    return (
      <section className='main'>
        <IconBox
          key='recent'
          category='recent'
          icons={emojis}
          actions={actions}
          />
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

MainSection.propTypes = {
  emojis: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
