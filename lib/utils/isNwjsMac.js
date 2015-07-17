import isNwjs from './isNwjs';
const isNwjsMac = (isNwjs && process.platform === 'darwin');
export default isNwjsMac;
