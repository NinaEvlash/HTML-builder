const fs = require('fs');
const { console } = require('inspector');
const path = require('path');
fs.readdir('05-merge-styles/styles/', function (err, data) {
  if (!err) {
    data.forEach((item) => {
      getFileCss(item);
    });
  } else {
    console.log(err);
  }
});
function getFileCss(file) {
  const extension = '.css';
  fs.stat(`05-merge-styles/styles/${file}`, function (err, data) {
    if (err) throw err;
    if (data.isFile() && path.extname(file) === extension) {
      readFile(file);
    }
  });
}
function readFile(file) {
  fs.readFile(
    `05-merge-styles/styles/${file}`,
    { encoding: 'utf8', flag: 'r' },
    function (err, data) {
      if (!err) {
        let arr = data.split('\r\n');
        arr = arr.filter((line) => line.trim() !== '');
        creatNewFileCss(arr);
      } else {
        console.log(err);
      }
    },
  );
}
function creatNewFileCss(arr) {
  fs.writeFile(
    '05-merge-styles/project-dist/bundle.css',
    arr.join('\r\n'),
    { encoding: 'utf8', flag: 'w' },
    function (err) {
      if (err) console.log(err);
    },
  );
}
