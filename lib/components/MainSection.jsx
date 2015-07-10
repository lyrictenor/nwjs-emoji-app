import React, { Component, PropTypes } from 'react';

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
            <li key={emoji.text} {...actions}>{emoji.text}</li>
          )}
        </ul>
      </section>
    );
  }
}
