'use strict';

import convertImagePath from '../../lib/utils/convertImagePath';
import assert from 'assert';

describe('convert image path', () => {
  it('converts', () => {
    const rawPath =  'graphics/emojis/fire.png';
    assert.equal(convertImagePath(rawPath), 'assets/images/emojis/fire.png');
  });
});
