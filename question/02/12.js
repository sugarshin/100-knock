// 12. 1列目をcol1.txtに，2列目をcol2.txtに保存
// 各行の1列目だけを抜き出したものをcol1.txtに，2列目だけを抜き出したものをcol2.txtとしてファイルに保存せよ．確認にはcutコマンドを用いよ．

import fs from 'fs';

export default function(srcPath, destPath1, destPath2) {
  return read(srcPath).then(data => {
    return Promise.all([
      write(destPath1, getCol(data, 0)),
      write(destPath2, getCol(data, 1))
    ]);
  });
}

function read(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/${path}`, {encoding: 'utf-8'}, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function getCol(data, beginNum) {
  const rows = data.split('\n');
  return rows.map(row => {
    return row.split('\t')[beginNum];
  }).join('\n');
}

function write(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) reject(err);
      resolve(`${path} done`);
    });
  });
}
