import React, { Component } from 'react';
import onOpenExternals from '../utils/openExternals';

export default class Footer extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    return (
      <footer>
        <ul className="list-footer">
          <li>
            ♫ Enjoy emoji life!
          </li>
          <li>
            ☃ Emoji App source code is available on <a
              href="https://github.com/lyrictenor/nwjs-emoji-app"
              onClick={onOpenExternals.bind(this)}
              >GitHub</a>.
          </li>
          <li>
            ☺ These emoji data are based on <a
              href="http://www.emoji-cheat-sheet.com/"
              onClick={onOpenExternals.bind(this)}
              >Emoji-cheat-sheet.com</a>.
          </li>
        </ul>
      </footer>
    );
  }

}
