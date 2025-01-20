const fs = require('fs');
const readLine = require('readline');
fs.open('02-write-file/text.txt', 'w', (err) => {
  if (err) console.log(err);
});
const interfase = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
interfase.setPrompt('Write somesing ');
interfase.prompt();
interfase.on('line', (input) => {
  writeFile(`${input} `);
  if (input === 'exit') interfase.close();
});
interfase.once('close', () => {
  console.log('Bye!');
});
interfase.on('SIGINT', () => {
  interfase.close();
});

function writeFile(data) {
  fs.appendFile('02-write-file/text.txt', data, (err) => {
    if (err) {
      console.log(err);
    }
  });
}
