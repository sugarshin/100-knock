// 02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
// 「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．

export default function(...strings) {
  const maxLen = strings.reduce((len, current) => {
    return (len >= current.length) ? len : current.length;
  }, 0);

  let result = '';
  for (let i = 0; i < maxLen; i++) {
    result += strings.reduce((_result, current) => {
      if (current[i]) return _result += current[i];
    }, '');
  }

  return result;
}
