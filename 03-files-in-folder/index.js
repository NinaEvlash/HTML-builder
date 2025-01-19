const fs = require('fs');
const path = require('path');
function getBaseNameFile(file) {
  const pathToFile = `03-files-in-folder/secret-folder/${file}`;
  const baseName = path.basename(pathToFile);
  console.log(baseName);
}
function getExtNameFile(file) {
  const pathToFile = `03-files-in-folder/secret-folder/${file}`;
  const extName = path.extname(pathToFile);
  console.log(extName);
}
function getSizeFile(file) {
  const pathToFile = `03-files-in-folder/secret-folder/${file}`;
  fs.stat(pathToFile, function (err, data) {
    if (!err) {
      if (data.isFile) {
        console.log(data.size);
      } else {
        console.log('This is not a file!');
      }
    } else {
      console.log(err);
    }
  });
}
function getFolderFile() {
  const pathFolder = '03-files-in-folder/secret-folder';
  fs.readdir(pathFolder, function (err, data) {
    if (!err) {
      console.log(data);
      data.forEach((item) => {
        getBaseNameFile(item);
        getExtNameFile(item);
        getSizeFile(item);
      });
    } else {
      console.log(err);
    }
  });
}
getFolderFile();
