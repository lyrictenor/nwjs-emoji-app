import React, { Component, PropTypes } from 'react';
import IconBox from './IconBox.jsx';
import EmojiMaster from '../utils/emojiMaster';
import Notification from 'react-notification';

export default class MainSection extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      notification: {
        isActive: false
      }
    };
  }

  render () {
    const { emojis, actions } = this.props;

    return (
      <article className='main'>
        {this.renderNotification()}
        <IconBox
          key='recent'
          category='recent'
          icons={emojis}
          actions={actions}
          toggleNotification={this.toggleNotification.bind(this)}
          />
        {this.renderEmojisWithCategories()}
      </article>
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
            toggleNotification={this.toggleNotification.bind(this)}
            />
        )}
      </div>
    );
  }

  renderNotification () {
    const { emojis } = this.props;
    const emoji = emojis[0];
    if (Object.keys(emoji).length === 0) {
      return (
        <span />
      );
    }
    return (
      <Notification
        isActive={this.state.notification.isActive}
        message={`Copied ${emoji.pattern}`}
        action={''}
        onDismiss={this.toggleNotification.bind(this)}
        dismissAfter={4000}
        />
    );
  }

  toggleNotification () {
    this.setState({
      notification: {
        isActive: !this.state.notification.isActive
      }
    });
  }
}

MainSection.propTypes = {
  emojis: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
