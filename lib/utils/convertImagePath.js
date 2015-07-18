import path from 'path';

export default function (imagePath) {
  const splited = imagePath.split('/');
  const file = splited[splited.length - 1];
  return path.join('assets', 'images', 'emojis', file);
}
