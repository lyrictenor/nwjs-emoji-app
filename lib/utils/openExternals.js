"use strict";
/*
  UI/Navbar does not send event.target.href,
  so this accepts additional url string.
 */
module.exports = (url, event) => {
  if(window.gui) {
    if (typeof url === "string"){
      event.preventDefault();
      window.gui.Shell.openExternal(url);
    } else {
      event = url;
      event.preventDefault();
      window.gui.Shell.openExternal(event.target.href);
    }
  }
};
