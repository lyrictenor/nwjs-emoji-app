import React, { Component, PropTypes } from 'react';

export default class IconImage extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { icon } = this.props;

    return (
      <img
        className='icon-image'
        src={icon.image}
        width='32'
        height='32'
        alt={icon.pattern}
        title={icon.pattern}
        data-name={icon.name}
        />
    );
  }
}

IconImage.propTypes = {
  icon: PropTypes.object.isRequired
};
