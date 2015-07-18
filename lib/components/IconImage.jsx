import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default class IconImage extends Component {
  constructor (props, context) {
    super(props, context);
  }
  handleClick (icon) {
    this.props.onAddHistory(icon);
    this.props.toggleNotification();
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
        title={icon.pattern}
        onClick={this.handleClick.bind(this, icon)}
        />
    );
  }
}

IconImage.propTypes = {
  icon: PropTypes.object.isRequired,
  onAddHistory: PropTypes.func.isRequired,
  toggleNotification: PropTypes.func.isRequired
};
