import React, { Component, PropTypes } from 'react';
import capitalize from 'capitalize';

export default class IconBox extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    const { category, icons } = this.props;

    return (
      <div>
        <h3>{capitalize(category)}</h3>
        <ul>
          {icons.map(icon =>
            <li key={icon.name}><img src={icon.image} /></li>
          )}
        </ul>
      </div>
    );
  }
}

IconBox.propTypes = {
  category: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired
};
