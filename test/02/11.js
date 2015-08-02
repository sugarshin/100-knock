import assert from 'power-assert';
import func from '../../question/02/11';

describe('02-11', () => {
  it('タブをスペースに置換', () => {
    const filePath = '../../question/02/hightemp.txt';
    const actual = func(filePath);

    return actual.then(r => {
      assert(r.split('').every(str => str !== '\t'));
    });
  });
});
