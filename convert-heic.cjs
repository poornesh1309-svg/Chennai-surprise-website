const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');

const dir = path.join(__dirname, 'public', 'carousel');
const files = fs.readdirSync(dir);

(async () => {
  for (const file of files) {
    if (file.toLowerCase().endsWith('.heic')) {
      const inputBuffer = fs.readFileSync(path.join(dir, file));
      try {
        console.log(`Converting ${file}...`);
        const outputBuffer = await heicConvert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 0.8
        });
        const outName = file.replace(/\.[hH][eE][iI][cC]$/, '.jpg');
        fs.writeFileSync(path.join(dir, outName), outputBuffer);
        console.log(`Saved ${outName}`);
      } catch (e) {
        console.error(`Error converting ${file}`, e);
      }
    }
  }
})();
