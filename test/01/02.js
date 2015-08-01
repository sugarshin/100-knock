import assert from 'power-assert';
import func from '../../question/01/02';

describe('01-02', () => {
  it('「パトカー」＋「タクシー」＝「パタトクカシーー」', () => {
    assert(func('パトカー', 'タクシー') === 'パタトクカシーー');
  });
});
