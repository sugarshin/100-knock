import assert from 'power-assert';
import func from '../../question/02/10';

describe('02-10', () => {
  it('行数のカウント', () => {
    const filePath = '../../question/02/hightemp.txt';
    const actual = func(filePath);
    const expect = 25;
    return actual.then(r => {
      assert(r === expect);
    });
  });
});
