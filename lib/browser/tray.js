// https://github.com/nwjs/nw.js/wiki/Minimize-to-tray
import isNwjs from '../utils/isNwjs';
import pkg from '../../package.json';
// Reference to window and tray
let tray;
let win;
(() => {
  if (isNwjs) {
    let gui = window.gui;
    win = gui.Window.get();

    // Get the minimize event
    win.on('minimize', function () {
      // Hide window
      this.hide();

      // Retina Tray icon on OSX
      // https://github.com/nwjs/nw.js/issues/1749#issuecomment-39627758
      let icon;
      if(window.devicePixelRatio > 1) {
        icon = 'images/innocent@2x.png'; //Image should be 32x32
      } else {
        icon = 'images/innocent.png';
      }

      // Show tray
      tray = new gui.Tray({ icon: icon });
      tray.tooltip = pkg.name;

      // Show window and remove tray when clicked
      tray.on('click', function () {
        win.show();
        win.focus();
        this.remove();
        tray = null;
      });
    });
  }
})(window);
