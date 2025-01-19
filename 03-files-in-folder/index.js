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
function getInfoFile(file) {
  const pathToFile = `03-files-in-folder/secret-folder/${file}`;
  fs.stat(pathToFile, function (err, data) {
    if (err) throw err;
    if (data.isFile()) {
      getBaseNameFile(file);
      getExtNameFile(file);
      console.log(data.size);
    }
  });
}
function getFolderFile() {
  const pathFolder = '03-files-in-folder/secret-folder';
  fs.readdir(pathFolder, function (err, data) {
    if (!err) {
      data.forEach((item) => {
        getInfoFile(item);
      });
    } else {
      console.log(err);
    }
  });
}
getFolderFile();
