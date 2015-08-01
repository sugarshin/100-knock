import assert from 'power-assert';
import func from '../../question/01/03';

describe('01-03', () => {
  it('円周率', () => {
    const actual = func('Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.');
    const expect = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9];
    assert.deepEqual(actual, expect);
  });
});
