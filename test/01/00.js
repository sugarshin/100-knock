import assert from 'power-assert';
import func from '../../question/01/00';

describe('01-00', () => {
  it('文字列の逆順', () => {
    assert(func('stressed') === 'desserts');
  });
});
