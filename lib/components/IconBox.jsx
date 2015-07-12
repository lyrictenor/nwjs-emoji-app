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
    const styles = {
      li: {
        display: 'inline-block',
        height: '32px',
        border: 'solid 1px transparent',
        ':hover': {
          background: '#f8f8f8',
          border: 'solid 1px red'
        }
      }
    };

    return (
      <div>
        <h3>{capitalize(category)}</h3>
        <ul>
          {icons.map(icon =>
            <li key={icon.name} style={styles.li}>
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
