#!/usr/bin/env node
import concat from 'concat-stream';
import cheerio from 'cheerio';

process.stdin.pipe(concat((body) => {
  const $ = cheerio.load(body.toString('utf8'));
  let emoticons = [];
  const blocks = $('ul.emojis');

  blocks.each((idx, block) => {
    let classes = $(block).attr('class').split(' ');
    let category = classes.filter((elem) => {
      return elem != 'emojis';
    }).pop();

    $(block).find('li').each((i, list) => {
      let image = $(list).find('img').attr('src');
      let name = $(list).find('.name');
      let alternatives = (name.data('alternative-name') !== undefined) ?
        String(name.data('alternative-name')).split(',').map((value) => {
          return value.trim();
        }) :
        [];
      emoticons.push({
        name: name.text(),
        image: image,
        category: category,
        alternatives: alternatives
      });
    });
  });
  console.log(JSON.stringify(emoticons));
}));
