// 10. 行数のカウント
// 行数をカウントせよ．確認にはwcコマンドを用いよ．

import fs from 'fs';

export default function(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/${filePath}`, {encoding: 'utf-8'}, (err, data) => {
      if (err) reject(err);
      resolve(data.split('\n').length);
    });
  });
}
