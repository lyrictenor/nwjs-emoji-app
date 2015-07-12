'use strict';

import convertImagePath from '../../lib/utils/convertImagePath';
import assert from 'power-assert';

describe('convert image path', () => {
  it('converts', () => {
    const rawPath =  'graphics/emojis/fire.png';
    const converted = 'assets/images/emojis/fire.png';
    assert.equal(convertImagePath(rawPath), converted);
  });
});
