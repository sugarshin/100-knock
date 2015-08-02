import assert from 'power-assert';
import func from '../../question/01/07';

describe('01-07', () => {
  it('テンプレートによる文生成', () => {
    const actual = func(12, '気温', 22.4);
    const expect = '12時の気温は22.4';
    assert(actual === expect);
  });
});
