import capitalize from 'capitalize';
import pkg from '../../package.json';
import isNwjsMac from 'is-nwjs-mac';
import isNwjs from 'is-nwjs';
let gui;
(() => {
  if (isNwjs) {
    gui = require('nw.gui');
    if (isNwjsMac) {
      let mb = new gui.Menu({ type: 'menubar' });
      mb.createMacBuiltin(capitalize(pkg.name));
      gui.Window.get().menu = mb;
    }
    window.gui = gui;
  }
})(window);
