// 01. 「パタトクカシーー」
// 「パタトクカシーー」という文字列の1,3,5,7文字目を取り出して連結した文字列を得よ．

export default function(string) {
  const strArray = string.split('');
  return `${strArray[0]}${strArray[2]}${strArray[4]}${strArray[6]}`;
}
