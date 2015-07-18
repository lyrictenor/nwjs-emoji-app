'use strict';
import isNwjs from './isNwjs.js';
/*
  UI/Navbar does not send event.target.href,
  so this accepts additional url string.
 */
module.exports = (url, event) => {
  if (isNwjs) {
    let gui = require('nw.gui');
    if (typeof url === 'string') {
      event.preventDefault();
      gui.Shell.openExternal(url);
    } else {
      event = url;
      event.preventDefault();
      gui.Shell.openExternal(event.target.href);
    }
  }
};
