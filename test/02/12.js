import assert from 'power-assert';
import func from '../../question/02/12';

describe('02-12', () => {
  it('1列目をcol1.txtに，2列目をcol2.txtに保存', () => {
    const filePath = '../../question/02/hightemp.txt';
    const destPath1 = `${__dirname}/col1.txt`;
    const destPath2 = `${__dirname}/col2.txt`;
    const actual = func(filePath, destPath1, destPath2);
    const resultMsgs = [`${destPath1} done`, `${destPath2} done`];
    return actual.then(msg => {
      assert.deepEqual(msg, resultMsgs);
    });
  });
});
