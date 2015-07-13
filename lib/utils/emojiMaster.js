import emojiCheatSheetData from '../../emoji-cheat-sheet-data.json';
import convertImagePath from './convertImagePath';

export default class {
  constructor (data = emojiCheatSheetData) {
    this.emojis = data.map(emoji => {
      emoji.image = convertImagePath(emoji.image);
      return emoji;
    });
  }

  filterByCategory (category) {
    return this.emojis.filter((emoji) => {
      return emoji.category === category;
    });
  }

  all () {
    return this.emojis;
  }

  findByName (name) {
    return Array.find(this.emojis, (emoji) => emoji.name === name);
  }
}
