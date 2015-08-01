import assert from 'power-assert';
import func from '../../question/01/04';

describe('01-04', () => {
  it('元素記号', () => {
    const actual = func('Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.');
    const expect = {
      1: 'H',
      2: 'He',
      3: 'Li',
      4: 'Be',
      5: 'B',
      6: 'C',
      7: 'N',
      8: 'O',
      9: 'F',
      10: 'Ne',
      11: 'Na',
      12: 'Mi',
      13: 'Al',
      14: 'Si',
      15: 'P',
      16: 'S',
      17: 'Cl',
      18: 'Ar',
      19: 'K',
      20: 'Ca'
    };
    assert.deepEqual(actual, expect);
  });
});
