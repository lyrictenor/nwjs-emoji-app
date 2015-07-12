import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { icon } = this.props;

    return (
      <li className='icon'>
        <img
          src={icon.image}
          width='32'
          height='32'
          alt={`:${icon.name}:`}
          title={`:${icon.name}:`}
          />
      </li>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired
};
