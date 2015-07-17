import isNode from './isNode';
let isNwjs = false;
if (isNode) {
  try {
    isNwjs = (typeof require('nw.gui') !== 'undefined');
  } catch(e) {
    isNwjs = false;
  }
}
export default isNwjs;
