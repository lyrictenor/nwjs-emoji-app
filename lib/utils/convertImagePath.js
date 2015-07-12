import path from 'path';

export default function (imagePath) {
  const file = imagePath.split('/').pop();
  return path.join('assets', 'images', 'emojis', file);
}
