import capitalize from 'capitalize';
import pkg from '../../package.json';
(() => {
  if (typeof process === 'object' && process.platform === 'darwin') {
    let gui = require('nw.gui');
    let mb = new gui.Menu({ type: 'menubar' });
    mb.createMacBuiltin(capitalize(pkg.name));
    gui.Window.get().menu = mb;
    window.gui = gui;
  }
})(window);
