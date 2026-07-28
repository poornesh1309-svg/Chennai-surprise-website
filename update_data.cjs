const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf-8');
const newServicesStr = fs.readFileSync('new_services.json', 'utf-8');
const newIdsStr = fs.readFileSync('new_ids.json', 'utf-8');

// Insert new services at the end of SERVICES array
const servicesEndIndex = content.indexOf('];\n\nexport const GALLERY_ITEMS');
if (servicesEndIndex !== -1) {
  // Strip [] from newServicesStr
  const innerStr = newServicesStr.trim().slice(1, -1).trim();
  content = content.slice(0, servicesEndIndex) + ',\n  ' + innerStr + '\n' + content.slice(servicesEndIndex);
} else {
  console.log("Could not find SERVICES array end.");
}

// Insert new ids into CATEGORY_DATA 'surprise' services array
const categoryRegex = /(id:\s*'surprise'[\s\S]*?services:\s*\[)([\s\S]*?)(\])/;
content = content.replace(categoryRegex, (match, p1, p2, p3) => {
  const ids = JSON.parse(newIdsStr);
  const idsFormatted = ids.map(id => `      '${id}'`).join(',\n');
  return p1 + p2 + (p2.trim() ? ',\n' : '') + idsFormatted + '\n    ' + p3;
});

fs.writeFileSync('src/data.ts', content);
console.log("Updated data.ts");
