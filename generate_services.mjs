import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import heicConvert from 'heic-convert';

const inputDir = path.resolve('new services images');
const outputDir = path.resolve('public/new-services');
const publicPrefix = '/new-services';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);
const newServices = [];
const newIds = [];

const toTitleCase = (str) => {
  return str.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

async function processFiles() {
  for (const file of files) {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    let outputFilename = file;
    let outputPath = path.join(outputDir, file);
    const inputPath = path.join(inputDir, file);

    const name = toTitleCase(basename);
    const id = basename.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    console.log(`Processing ${file}...`);
    
    let isVideo = ext.toLowerCase() === '.mp4';

    if (ext.toLowerCase() === '.heic') {
      console.log('Converting HEIC...');
      const inputBuffer = fs.readFileSync(inputPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.8
      });
      outputFilename = `${basename}.jpg`;
      outputPath = path.join(outputDir, outputFilename);
      fs.writeFileSync(outputPath, Buffer.from(outputBuffer));
    } else {
      fs.copyFileSync(inputPath, outputPath);
    }

    const publicUrl = `${publicPrefix}/${outputFilename}`;

    const service = {
      id,
      name,
      shortDesc: `Experience our beautifully crafted ${name} package designed to create magical memories.`,
      longDesc: `Immerse yourself in the magic of our ${name} setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.`,
      iconName: 'Sparkles',
      colorTheme: 'pink',
      tag: 'Special Setup',
      image: publicUrl,
      priceStart: '₹4,999',
      whatsIncluded: [
        'Premium high-quality decorations tailored to the theme',
        'Professional setup and seamless execution by our team',
        'Custom ambient lighting and atmospheric details',
        'Dedicated event coordinator for a stress-free experience'
      ]
    };

    newServices.push(service);
    newIds.push(id);
  }

  fs.writeFileSync('new_services.json', JSON.stringify(newServices, null, 2));
  fs.writeFileSync('new_ids.json', JSON.stringify(newIds, null, 2));
  console.log('Done!');
}

processFiles().catch(console.error);
