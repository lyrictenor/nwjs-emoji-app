import React, { Component, PropTypes } from 'react';

export default class IconImage extends Component {
  constructor (props, context) {
    super(props, context);
  }
  handleClick (name) {
    this.props.onAddHistory(name);
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
        onClick={this.handleClick.bind(this, icon.name)}
        />
    );
  }
}

IconImage.propTypes = {
  icon: PropTypes.object.isRequired,
  onAddHistory: PropTypes.func.isRequired
};
