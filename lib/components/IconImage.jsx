import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default class IconImage extends Component {
  constructor (props, context) {
    super(props, context);
  }
  handleClick (name) {
    this.props.onAddHistory(name);
  }

  render () {
    const { icon } = this.props;
    const className = cx(
      'icon-image',
      'sprite',
      `sprite-${icon.name}`
    );

    return (
      <span
        className={className}
        onClick={this.handleClick.bind(this, icon.name)}
        />
    );
  }
}

IconImage.propTypes = {
  icon: PropTypes.object.isRequired,
  onAddHistory: PropTypes.func.isRequired
};
