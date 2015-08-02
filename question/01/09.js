// 09. Typoglycemia
// スペースで区切られた単語列に対して，各単語の先頭と末尾の文字は残し，それ以外の文字の順序をランダムに並び替えるプログラムを作成せよ．ただし，長さが４以下の単語は並び替えないこととする．適当な英語の文（例えば"I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."）を与え，その実行結果を確認せよ．

export default function (string) {
  const words = string.split(/\s+/);
  const newWords = words.map(word => {
    if (word.length > 4) {
      let wordArray = word.split('');
      const first = wordArray.shift();
      const last = wordArray.pop();
      return `${first}${shuffle(wordArray).join('')}${last}`;
    } else {
      return word;
    }
  });

  return newWords.join(' ');
}

function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
