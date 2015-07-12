'use strict';
import path from 'path';

module.exports = (imagePath) => {
  const file = imagePath.split('/').pop();
  return path.join('assets', 'images', 'emojis', file);
};
