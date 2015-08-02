// 11. タブをスペースに置換
// タブ1文字につきスペース1文字に置換せよ．確認にはsedコマンド，trコマンド，もしくはexpandコマンドを用

import fs from 'fs';

export default function(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/${filePath}`, {encoding: 'utf-8'}, (err, data) => {
      if (err) reject(err);
      const result = data.split('').map(str => {
        if (str === '\t') {
          return ' ';
        }
        return str;
      }).join('');
      resolve(result);
    });
  });
}
