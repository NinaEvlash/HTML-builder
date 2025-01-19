const fs = require('fs');
fs.mkdir('04-copy-directory/files-copy', (err) => {
  if (!err) console.log('Folder created!');
  else console.log(err);
});
fs.readdir('04-copy-directory/files/', function (err, data) {
  if (!err) {
    data.forEach((item) => {
      copyDir(item);
    });
  } else {
    console.log(err);
  }
});
function copyDir(file) {
  fs.copyFile(
    `04-copy-directory/files/${file}`,
    `04-copy-directory/files-copy/${file}`,
    (err) => {
      if (!err) console.log('File copied successfully!');
      else console.log(err);
    },
  );
}
