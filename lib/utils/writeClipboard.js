// https://github.com/nwjs/nw.js/wiki/Clipboard
export default function (gui, text) {
  let clipboard = gui.Clipboard.get();
  clipboard.set(text, 'text');
}
