'use strict';
import isNwjs from './isNwjs.js';

module.exports = (url, event) => {
  if (!isNwjs) {
    return;
  }

  let gui = require('nw.gui');

  /*
   UI/Navbar does not send event.target.href,
   so this accepts additional url string.
   */
  if (typeof url === 'string') {
    event.preventDefault();
    gui.Shell.openExternal(url);
  } else {
    event = url;
    event.preventDefault();
    gui.Shell.openExternal(event.target.href);
  }
};
