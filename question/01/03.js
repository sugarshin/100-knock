// 03. 円周率
// "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."という文を単語に分解し，各単語の（アルファベットの）文字数を先頭から出現順に並べたリストを作成せよ．

export default function(string) {
  const words = string.split(/\s+/);
  return words.reduce((list, current) => {
    list.push(
      current.split('')
        .filter(str => {
          if (/[a-zA-Z0-9]/.test(str)) {
            return str;
          }
        })
        .join('')
        .length
    );
    return list;
  }, []);
}
