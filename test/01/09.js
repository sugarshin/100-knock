import assert from 'power-assert';
import func from '../../question/01/09';

describe('01-09', () => {
  it('Typoglycemia', () => {
    const source = "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind .";
    const actual = func(source);
    console.log(source);
    console.log(actual);
    const arr = actual.split(' ');
    assert(actual.length === source.length);
    assert(arr[0] === 'I');
    assert(arr[1][0] === 'c' && arr[1][7] === 't');
    assert(arr[3] === 'that');
    assert(arr[4] === 'I');
    assert(arr[8] === 'what');
    assert(arr[9] === 'I');
    assert(arr[10] === 'was');
    assert(arr[12] === ':');
    assert(arr[13] === 'the');
    assert(arr[16] === 'of');
    assert(arr[17] === 'the');
    assert(arr[19] === 'mind');
    assert(arr[20] === '.');
  });
});
