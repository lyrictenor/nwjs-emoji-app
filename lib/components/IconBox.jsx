import React, { Component, PropTypes } from 'react';
import capitalize from 'capitalize';
import Radium from 'radium';

@Radium
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
            <li key={icon.name} className='icon'>
              <img
                src={icon.image}
                width='32'
                height='32'
                alt={`:${icon.name}:`}
                title={`:${icon.name}:`}
                />
            </li>
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
