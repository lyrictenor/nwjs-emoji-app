import React, { Component, PropTypes } from 'react';
import capitalize from 'capitalize';
import IconList from './IconList.jsx';

export default class IconBox extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { category, icons, actions } = this.props;

    return (
      <div>
        <h3>{capitalize(category)}</h3>
        <ul>
          {icons.map(icon =>
            <IconList key={icon.name} icon={icon} {...actions} />
          )}
        </ul>
      </div>
    );
  }
}

IconBox.propTypes = {
  category: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
