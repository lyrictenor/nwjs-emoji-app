import React, { Component, PropTypes } from 'react';
import IconImage from './IconImage.jsx';

export default class IconList extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { icon, actions } = this.props;

    return (
      <li className='icon-list'>
        <IconImage
          icon={icon}
          {...actions}
          />
      </li>
    );
  }
}

IconList.propTypes = {
  icon: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
