import capitalize from 'capitalize';
import pkg from '../../package.json';
import isNwjsMac from '../utils/isNwjsMac';
(() => {
  if (isNwjsMac) {
    let gui = require('nw.gui');
    let mb = new gui.Menu({ type: 'menubar' });
    mb.createMacBuiltin(capitalize(pkg.name));
    gui.Window.get().menu = mb;
    window.gui = gui;
  }
})(window);
